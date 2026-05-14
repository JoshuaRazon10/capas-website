<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DocumentResource\Pages;
use App\Models\Document;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class DocumentResource extends Resource
{
    protected static ?string $model = Document::class;
    protected static ?string $navigationIcon = 'heroicon-o-document-text';
    protected static ?string $navigationGroup = 'Transparency Portal';
    protected static ?string $navigationLabel = 'Documents';
    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Document Details')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required()
                            ->maxLength(255)
                            ->placeholder('e.g. Appropriation Ordinance No. 01, Series of 2024'),

                        Forms\Components\Select::make('type')
                            ->options([
                                'ordinance' => 'Ordinance',
                                'resolution' => 'Resolution',
                                'executive_order' => 'Executive Order',
                                'bids_awards' => 'Bids & Awards',
                                'transparency_seal' => 'Transparency Seal',
                                'fund_utilization' => 'Fund Utilization',
                                'gad' => 'GAD Document',
                                'bayanihan_grant' => 'Bayanihan Grant',
                                'citizens_charter' => 'Citizens Charter',
                            ])
                            ->required()
                            ->searchable(),

                        Forms\Components\TextInput::make('reference_no')
                            ->label('Reference Number')
                            ->placeholder('e.g. Ord. No. 001-2024'),

                        Forms\Components\TextInput::make('year')
                            ->numeric()
                            ->required()
                            ->default(date('Y')),

                        Forms\Components\DatePicker::make('date_published')
                            ->label('Date Published'),

                        Forms\Components\Textarea::make('description')
                            ->rows(3),

                        Forms\Components\FileUpload::make('file_path')
                            ->label('PDF Document')
                            ->directory('documents')
                            ->acceptedFileTypes(['application/pdf'])
                            ->maxSize(10240)
                            ->required(),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable()
                    ->limit(50),
                Tables\Columns\BadgeColumn::make('type')
                    ->colors([
                        'primary' => 'ordinance',
                        'success' => 'resolution',
                        'warning' => 'executive_order',
                        'danger' => 'bids_awards',
                        'info' => 'transparency_seal',
                    ]),
                Tables\Columns\TextColumn::make('reference_no')
                    ->label('Ref No.')
                    ->searchable(),
                Tables\Columns\TextColumn::make('year')
                    ->sortable(),
                Tables\Columns\TextColumn::make('date_published')
                    ->date()
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'ordinance' => 'Ordinances',
                        'resolution' => 'Resolutions',
                        'executive_order' => 'Executive Orders',
                        'bids_awards' => 'Bids & Awards',
                        'transparency_seal' => 'Transparency Seal',
                        'fund_utilization' => 'Fund Utilization',
                    ]),
                Tables\Filters\SelectFilter::make('year')
                    ->options(array_combine(range(date('Y'), 2020), range(date('Y'), 2020))),
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
            'index' => Pages\ListDocuments::route('/'),
            'create' => Pages\CreateDocument::route('/create'),
            'edit' => Pages\EditDocument::route('/{record}/edit'),
        ];
    }
}
