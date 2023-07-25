<template>
    <section class="contacts">
        <div class="contacts__content container ">
            <h1 class="contacts__content-title">Contacts</h1>

            <div class="contacts__content__add">
                <div class="contacts__content__add-map">
                    <iframe id="map"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3108.9160029323625!2d65.80621108487256!3d38.81147789888271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDQ4JzQxLjMiTiA2NcKwNDgnMzkuOSJF!5e0!3m2!1suz!2s!4v1690104630299!5m2!1suz!2s"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>
            </div>
            <div class="contacts__content__add-lr">
                <div class="contacts__content__add__left">
                    <div class="contacts__content__add-card reveal">
                        <div class="contacts__content__add-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contacts__content__add-info">
                            <h3>Address</h3>
                            <span>Uzbekistan</span>
                        </div>
                    </div>
                    <div class="contacts__content__add-card reveal">
                        <div class="contacts__content__add-icon">
                            <i class="fal fa-mobile-android"></i>
                        </div>
                        <div class="contacts__content__add-info">
                            <h3>Phone</h3>
                            <span>+998 90 879 26 01</span>
                        </div>
                    </div>
                    <div class="contacts__content__add-card reveal">
                        <div class="contacts__content__add-icon">
                            <i class="fal fa-envelope"></i>
                        </div>
                        <div class="contacts__content__add-info">
                            <h3>Email</h3>
                            <span>mirzohidovruslan.gmail.com</span>
                        </div>
                    </div>



                </div>
                <div class="contacts__content__add__right">
                    <h1 class="contacts__content__add__right-title">Contact me</h1>


                    <form action="" class="contacts__content__add__right-form form" id="contact__form">
                        <input class="contacts__content__add__right-form__input-name" type="name " placeholder="Your Name *"
                            id="name" required="" data-validation-required-message="Please enter your name.">
                        <input class="contacts__content__add__right-form__input-email" type="email"
                            placeholder="Your Email *" id="email" required=""
                            data-validation-required-message="Please enter your email address.">

                        <input class="contacts__content__add__right-form__input-message" type="text" required=""
                            data-validation-required-message="Please enter a message." placeholder="Text" id="message">
                    </form>


                    <button class="contacts__content__add__right-btn">Send</button>

                </div>
            </div>


        </div>

    </section>
</template>
 
<script setup>

</script>
 
<style lang="scss" scoped></style>