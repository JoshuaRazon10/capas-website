<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DirectoryEntryResource\Pages;
use App\Models\DirectoryEntry;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class DirectoryEntryResource extends Resource
{
    protected static ?string $model = DirectoryEntry::class;
    protected static ?string $navigationIcon = 'heroicon-o-building-office';
    protected static ?string $navigationGroup = 'Municipal Directory';
    protected static ?string $navigationLabel = 'Directory Entries';
    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Official Information')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->required()
                            ->placeholder('Full Name'),

                        Forms\Components\TextInput::make('position')
                            ->required()
                            ->placeholder('e.g. Municipal Mayor'),

                        Forms\Components\TextInput::make('department')
                            ->required()
                            ->placeholder('e.g. Office of the Local Chief Executive'),

                        Forms\Components\Select::make('category')
                            ->options([
                                'executive' => 'Executive Office',
                                'council' => 'Municipal Council (SB)',
                                'mayor' => 'Office of the Mayor',
                                'vice-mayor' => 'Office of the Vice Mayor',
                                'national' => 'National Agency',
                                'utility' => 'Utility Provider',
                                'church' => 'Catholic Church',
                                'school' => 'School',
                                'barangay' => 'Barangay Official',
                            ])
                            ->required(),

                        Forms\Components\TextInput::make('sort_order')
                            ->numeric()
                            ->default(0)
                            ->label('Display Order'),

                        Forms\Components\TextInput::make('facebook_link')
                            ->url()
                            ->label('Facebook Page URL'),

                        Forms\Components\FileUpload::make('image_path')
                            ->directory('directory')
                            ->image()
                            ->label('Official Photo'),
                    ])->columns(2),

                Forms\Components\Section::make('Contact Information')
                    ->schema([
                        Forms\Components\TagsInput::make('dept_emails')
                            ->label('Department Emails')
                            ->placeholder('Add email and press Enter'),

                        Forms\Components\TagsInput::make('contact_numbers')
                            ->label('Contact Numbers')
                            ->placeholder('Add number and press Enter'),

                        Forms\Components\TagsInput::make('personal_emails')
                            ->label('Personal Emails')
                            ->placeholder('Add email and press Enter'),
                    ])->columns(1),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('sort_order')
                    ->label('#')
                    ->sortable(),
                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('position')
                    ->limit(30),
                Tables\Columns\TextColumn::make('department')
                    ->limit(30)
                    ->searchable(),
                Tables\Columns\BadgeColumn::make('category')
                    ->colors([
                        'primary' => 'executive',
                        'success' => 'national',
                        'warning' => 'utility',
                        'info' => 'church',
                    ]),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('category')
                    ->options([
                        'executive' => 'Executive Offices',
                        'national' => 'National Agencies',
                        'utility' => 'Utility Providers',
                        'church' => 'Churches',
                    ]),
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
            ->defaultSort('sort_order', 'asc');
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDirectoryEntries::route('/'),
            'create' => Pages\CreateDirectoryEntry::route('/create'),
            'edit' => Pages\EditDirectoryEntry::route('/{record}/edit'),
        ];
    }
}
