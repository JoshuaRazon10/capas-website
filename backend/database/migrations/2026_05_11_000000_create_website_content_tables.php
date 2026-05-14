<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // 1. Documents (Ordinances, Resolutions, EOs, etc.)
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('file_path');
            $table->string('type'); // ordinance, resolution, executive_order, etc.
            $table->string('reference_no')->nullable();
            $table->date('date_published')->nullable();
            $table->year('year');
            $table->text('description')->nullable();
            $table->timestamps();
        });

        // 2. Articles (News and Events)
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->longText('content');
            $table->string('featured_image')->nullable();
            $table->string('type')->default('news'); // news, event
            $table->date('event_date')->nullable();
            $table->boolean('is_published')->default(true);
            $table->timestamps();
        });

        // 3. Directory Entries
        Schema::create('directory_entries', function (Blueprint $table) {
            $table->id();
            $table->integer('sort_order')->default(0);
            $table->string('name');
            $table->string('position');
            $table->string('department');
            $table->json('dept_emails')->nullable();
            $table->json('contact_numbers')->nullable();
            $table->json('personal_emails')->nullable();
            $table->string('category'); // executive, national, utility, church
            $table->string('facebook_link')->nullable();
            $table->timestamps();
        });

        // 4. Gallery Images
        Schema::create('gallery_images', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('image_path');
            $table->string('category')->nullable(); // general, tourism, event
            $table->timestamps();
        });
        
        // 5. Application Forms
        Schema::create('application_forms', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('file_path');
            $table->string('department')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('application_forms');
        Schema::dropIfExists('gallery_images');
        Schema::dropIfExists('directory_entries');
        Schema::dropIfExists('articles');
        Schema::dropIfExists('documents');
    }
};
