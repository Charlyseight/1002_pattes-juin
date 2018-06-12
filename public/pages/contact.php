<?php
if(isset($_POST["submit"])){
    $error = [];
    if(isset($_POST["name"]) && strlen($_POST["name"])===0){
        $error[] = "Vous n'avez pas mis votre nom";
    }
    if(isset($_POST["email"]) && strlen($_POST["email"])===0){
        $error[] = "Vous n'avez pas mis votre email";
    }
    if(isset($_POST["message"]) && strlen($_POST["message"])===0){
        $error[] = "Vous n'avez pas mis de message";
    }

    if(sizeof($error)===0){
        header('location:envoye.html');
    }
}

?>

<!DOCTYPE html>
<html class="no-js" lang="fr">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Nous contacter | 1002 pattes</title>
        <meta name="description" content="Le site de l'asbl 'La maison du 1002 pattes'">
        <meta name="keywords" content="jeunesse, aide, asbl, bastogne, famille, jeunes, adolescentes, enfants">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

        <link rel="stylesheet" href="../assets/css/bundle.css">
    </head>
    <body>
    <!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
    <![endif]-->
    <header class="blocheader">
        <h1 class="hidden">
            Le site de l'asbl "La maison du 1002 pattes"
        </h1>
        <div class="blocheader__flex">
            <div class="blocheader__flex__logo logo" itemscope itemtype="http://schema.org/Organization">
                <a href="#" class="logo__link" title="Aller sur la page d'accueil de l'asbl 'La maison du 1002 pattes'">
                    <img itemprop="logo" src="../assets/images/logo-2.jpg" alt="Logo de l'asbl 'La maison du 1002 pattes'" width="105" height="128" class="logo__img">
                    <meta itemprop="url" content="http://lamaisondu1002pattes.be">
                </a>
            </div>
            <input id="burger" type="checkbox" class="checkbox">
            <label for="burger" class="burgercss">
                <span class="hidden">Ouvrir/fermer le menu</span>
                <span></span>
                <span></span>
                <span></span>
            </label>
            <nav class="blocheader__nav">
                <h2 class="hidden">Ma navigation principale</h2>
                <ul class="blocheader__nav__list list">
                    <li class="list__item">
                        <a href="../index.html" class="list__item__link" title="Aller vers la page accueil du site 'La maison du 1002 pattes'">Accueil</a>
                    </li>
                    <li class="list__item">
                        <a href="../pages/aide.html" class="list__item__link indexpage" title="Aller vers la page 'Vous aider ?' du site 'La maison du 1002 pattes'">Vous aider&nbsp;?</a>
                    </li>
                    <li class="list__item">
                        <a href="../pages/apropos.html" class="list__item__link" title="Aller vers la page 'À propos de nous' du site 'La maison du 1002 pattes'">À propos de nous</a>
                    </li>
                    <li class="list__item">
                        <a href="../pages/equipe.html" class="list__item__link" title="Aller vers la page 'Notre équipe' du site 'La maison du 1002 pattes'">Notre équipe</a>
                    </li>
                    <li class="list__item">
                        <a href="../pages/contact.php" class="list__item__link active" title="Aller vers la page 'Nous contacter' du site 'La maison du 1002 pattes'">Nous contacter</a>
                    </li>
                    <li class="list__item">
                        <a href="../pages/don.html" class="list__item__link link--noborder" title="Aller vers la page 'Faire un don' du site 'La maison du 1002 pattes'">Faire un don</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="blocheader__desc__img croop">
            <div itemscope itemtype="http://schema.org/Organization" class="blocheader__desc">
                <p itemprop="description" class=" blocheader__desc__text">
                    Nous sommes une asbl qui aide les enfants, adolescents et familles en difficultées.
                </p>
            </div>
        </div>
    </header>
    <main>
        <h1 class="hidden">
            Toutes les informations pour nous contacter
        </h1>
        <div class="bloccontact__flex">
            <section class="bloccontact">
                <h2 class="bloccontact__title1">
                    Nous contacter
                </h2>
                <p class="bloccontact__text">
                    Route de Neufchâteau 73 R2<br>
                    6600 Bastogne
                </p>
                <p class="bloccontact__text">
                    +32 (0)61/46.60.08
                </p>
                <p class="bloccontact__text">
                    Par téléphone le lundi entre 10h - 12h<br>
                    et 13h -16h et le jeudi entre 10h - 12h
                </p>
                <p class="bloccontact__text">
                    N° d’entreprise : 0525.690.609
                </p>
                <p class="bloccontact__text">
                    N° de compte : BE16 0016 9474 2974
                </p>
            </section>
            <section class="bloccontact__form">
                <h2 class="hidden">
                    Formulaire de contact
                </h2>
                <div class="errors">
                    <?php if(isset($error) && sizeof($error)>0): ?>
                        <ul>
                            <?php foreach($error as $e): ?>
                                <li>
                                    <p>
                                        <i class="fas fa-exclamation"></i>
                                        <?= $e ?>
                                    </p>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    <?php endif; ?>
                </div>
                <form action="#" method="POST" class="bloccontact__form__flex">
                    <div class="bloccontact__flex__column">
                        <label for="name" class="bloccontact__form__label">Nom</label>
                        <input type="text" name="name" id="name" value="<?= @$_POST['name']?>" class="bloccontact__form__input">
                    </div>
                    <div class="bloccontact__flex__column">
                        <label for="email" class="bloccontact__form__label">Email</label>
                        <input type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" id="email" name="email" value="<?= @$_POST['email']?>" class="bloccontact__form__input">
                    </div>
                    <div class="bloccontact__flex__column">
                        <label for="message" class="bloccontact__form__label">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" class="bloccontact__form__textarea"><?= @$_POST['message'] ?></textarea>
                    </div>
                    <input type="submit" name="submit" value="Envoyer" class="bloccontact__form__input--submit">
                </form>
            </section>
        </div>
        <section class="blocactiv-space">
            <h2 class="hidden">
                Les activitées organisées par l'asbl
            </h2>
            <div class="blocactiv-space__divimg">
                &nbsp;
            </div>
            <p class="blocactiv-space__text">
                Nous mettons en place des activitées pour les enfants et leurs familles
            </p>
            <a href="../index.html" class="blocactiv-space__link" title="Découvrir les activités proposées par l'asbl 'La maison du 1002 pattes'">Nos activitées</a>
        </section>
    </main>
    <footer class="blocfooter">
        <div itemscope itemtype="http://schema.org/Organization" class="blocfooter__content">
            <p class="blocfooter__text" itemprop="legalName">La maison du 1002 pattes</p>
        </div>
        <img src="../assets/images/logo-2.jpg" alt="Logo de l'asbl 'La maison du 1002 pattes'" width="105" height="128" class="blocfooter__img">
        <div itemscope itemtype="http://schema.org/Organization">
            <meta itemprop="address" content="Route de Neufchâteau 73 Bastogne">
            <meta itemprop="name" content="La maison du 1002 pattes">
            <meta itemprop="telephone" content="+32 (0)61/46.60.08">
        </div>
    </footer>
    <script src="../assets/js/bundle.js"></script>
</body>
</html>