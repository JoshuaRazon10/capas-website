<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ApplicationFormResource\Pages;
use App\Models\ApplicationForm;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ApplicationFormResource extends Resource
{
    protected static ?string $model = ApplicationForm::class;
    protected static ?string $navigationIcon = 'heroicon-o-clipboard-document-list';
    protected static ?string $navigationGroup = 'Transparency Portal';
    protected static ?string $navigationLabel = 'Application Forms';
    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\TextInput::make('title')->required(),
            Forms\Components\TextInput::make('department')->placeholder('e.g. BPLO, Assessors Office'),
            Forms\Components\FileUpload::make('file_path')
                ->label('Form File (PDF)')
                ->directory('forms')
                ->acceptedFileTypes(['application/pdf'])
                ->required(),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('department')->searchable(),
                Tables\Columns\TextColumn::make('created_at')->dateTime()->sortable(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([Tables\Actions\DeleteBulkAction::make()]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListApplicationForms::route('/'),
            'create' => Pages\CreateApplicationForm::route('/create'),
            'edit' => Pages\EditApplicationForm::route('/{record}/edit'),
        ];
    }
}
