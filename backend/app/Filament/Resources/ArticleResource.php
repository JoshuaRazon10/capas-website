<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ArticleResource\Pages;
use App\Models\Article;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ArticleResource extends Resource
{
    protected static ?string $model = Article::class;
    protected static ?string $navigationIcon = 'heroicon-o-newspaper';
    protected static ?string $navigationGroup = 'Media Center';
    protected static ?string $navigationLabel = 'News & Events';
    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Article Details')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required()
                            ->maxLength(255),

                        Forms\Components\Select::make('type')
                            ->options([
                                'news' => 'News Article',
                                'event' => 'Event',
                            ])
                            ->required(),

                        Forms\Components\DatePicker::make('event_date')
                            ->label('Event Date')
                            ->visible(fn (Forms\Get $get) => $get('type') === 'event'),

                        Forms\Components\Toggle::make('is_published')
                            ->label('Published')
                            ->default(true),

                        Forms\Components\TextInput::make('date_published')
                            ->label('Publication Date Display')
                            ->placeholder('e.g. May 04, 2026'),

                        Forms\Components\TextInput::make('external_link')
                            ->label('External Link (e.g. Facebook Post)')
                            ->url(),

                        Forms\Components\FileUpload::make('featured_image')
                            ->label('Featured Image')
                            ->image()
                            ->directory('articles')
                            ->maxSize(5120),

                        Forms\Components\RichEditor::make('content')
                            ->required()
                            ->columnSpanFull()
                            ->toolbarButtons([
                                'bold', 'italic', 'underline', 'strike',
                                'h2', 'h3',
                                'bulletList', 'orderedList',
                                'link', 'blockquote',
                                'undo', 'redo',
                            ]),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('featured_image')
                    ->label('Image')
                    ->circular(),
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable()
                    ->limit(40),
                Tables\Columns\BadgeColumn::make('type')
                    ->colors([
                        'primary' => 'news',
                        'success' => 'event',
                    ]),
                Tables\Columns\IconColumn::make('is_published')
                    ->boolean()
                    ->label('Published'),
                Tables\Columns\TextColumn::make('event_date')
                    ->date()
                    ->sortable()
                    ->placeholder('N/A'),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->label('Created'),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'news' => 'News',
                        'event' => 'Events',
                    ]),
                Tables\Filters\TernaryFilter::make('is_published')
                    ->label('Published'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListArticles::route('/'),
            'create' => Pages\CreateArticle::route('/create'),
            'edit' => Pages\EditArticle::route('/{record}/edit'),
        ];
    }
}
