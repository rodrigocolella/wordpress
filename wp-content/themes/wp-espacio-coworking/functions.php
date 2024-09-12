<?php
function mi_tema_basico_setup() {
    // Soporte para imágenes destacadas
    add_theme_support('post-thumbnails');

    // Soporte para menús
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'mi-tema-basico'),
    ));
}

add_action('after_setup_theme', 'mi_tema_basico_setup');

// Enqueue estilos y scripts
function mi_tema_basico_scripts() {
    wp_enqueue_style('mi-tema-basico-style', get_stylesheet_uri());
}

add_action('wp_enqueue_scripts', 'mi_tema_basico_scripts');
