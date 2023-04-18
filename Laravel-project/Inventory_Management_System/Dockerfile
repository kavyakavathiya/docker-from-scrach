FROM php:8.1-fpm as build
# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
WORKDIR /laravel-app1
COPY . .

RUN composer update
RUN composer install

RUN composer update
RUN php artisan key:generate

RUN php artisan config:cache

# EXPOSE 8000

# CMD ["php", "artisan", "serve"]
RUN apt update
RUN apt-get install nginx -y
RUN cp -r /laravel-app1 /var/www/html

CMD ["nginx", "-g", "daemon off;"]


