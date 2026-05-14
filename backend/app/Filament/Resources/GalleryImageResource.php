<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GalleryImageResource\Pages;
use App\Models\GalleryImage;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class GalleryImageResource extends Resource
{
    protected static ?string $model = GalleryImage::class;
    protected static ?string $navigationIcon = 'heroicon-o-photo';
    protected static ?string $navigationGroup = 'Media Center';
    protected static ?string $navigationLabel = 'Photo Gallery';
    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->placeholder('Photo caption or title'),
                Forms\Components\Select::make('category')
                    ->options([
                        'general' => 'General',
                        'tourism' => 'Tourism',
                        'event' => 'Event',
                        'infrastructure' => 'Infrastructure',
                    ]),
                Forms\Components\FileUpload::make('image_path')
                    ->label('Image')
                    ->image()
                    ->directory('gallery')
                    ->maxSize(5120)
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image_path')->label('Photo')->square()->size(80),
                Tables\Columns\TextColumn::make('title')->searchable()->limit(40),
                Tables\Columns\BadgeColumn::make('category'),
                Tables\Columns\TextColumn::make('created_at')->dateTime()->sortable(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([Tables\Actions\DeleteBulkAction::make()]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListGalleryImages::route('/'),
            'create' => Pages\CreateGalleryImage::route('/create'),
            'edit' => Pages\EditGalleryImage::route('/{record}/edit'),
        ];
    }
}
