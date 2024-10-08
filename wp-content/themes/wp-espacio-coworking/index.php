<?php
get_header();
?>

<div id="content">
    <?php
    if (have_posts()) :
        while (have_posts()) : the_post();
            ?>
            <article>
                <h2><?php the_title(); ?></h2>
                <div><?php the_content(); ?></div>
            </article>
            <?php
        endwhile;
    else :
        ?>
        <p>No se encontraron publicaciones.</p>
        <?php
    endif;
    ?>
</div>

<?php
get_footer();
?>
