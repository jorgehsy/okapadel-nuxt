<template>
  <div class="layout">
    <header class="header-okapadel">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark py-4">
          <a class="navbar-brand" href="/fr" rel="">
            <nuxt-img
              src="/images/okapadel_mainlogo-alt.svg"
              width="150"
              alt="okapadel logo"
            />
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/fr/solutions">
                  Solutions
                </NuxtLink>
                <div class="nav-item-submenu">
                  <ul>
                    <li class="nav-item">
                      <NuxtLink class="nav-link" rel="" to="/fr/courts">
                        <i class="fa-fw fa-solid fa-plus g-text"></i>Courts
                      </NuxtLink>
                    </li>
                    <li class="nav-item">
                      <NuxtLink class="nav-link" rel="" to="/fr/couvertures">
                        <i class="fa-fw fa-solid fa-plus g-text"></i>Couvertures
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <NuxtLink
                  class="nav-link"
                  rel=""
                  to="/fr/installations-de-padel"
                >
                  Installations de Padel</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/fr/projets"
                  >Projets</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/fr/qualite"
                  >Qualité</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/fr/a-propos-de-nous"
                  >À Propos de Nous</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/fr/contact"
                  >Contact</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/fr/plus-okapadel"
                  ><i class="fa-fw fa-solid fa-plus g-text"></i>Okapadel
                </NuxtLink>
              </li>
            </ul>
          </div>
          <Burger>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/solutions"
                  >Solutions</NuxtLink
                >
                <ul class="navbar-submenu-mobile">
                  <li class="nav-item">
                    <NuxtLink class="nav-link" rel="" to="/fr/courts"
                      ><i class="fa-fw fa-solid fa-plus g-text"></i>Courts
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink class="nav-link" rel="" to="/fr/couvertures">
                      <i class="fa-fw fa-solid fa-plus g-text"></i>Couvertures
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NuxtLink
                  class="nav-link"
                  rel=""
                  to="/fr/installations-de-padel"
                >
                  Installations de Padel
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/fr/projets"
                  >Projets</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/fr/qualite"
                  >Qualité</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/fr/a-propos-de-nous"
                  >À Propos de Nous</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/fr/contact"
                  >Contact</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/fr/plus-okapadel"
                  ><i class="fa-fw fa-solid fa-plus g-text"></i
                  >Okapadel</NuxtLink
                >
              </li>
            </ul>
          </Burger>
        </nav>
      </div>
    </header>
    <slot />
    <footer class="bg-green">
      <div class="container footer">
        <div class="row pb-5">
          <div class="col-12 col-lg-3 text-md-center mb-4">
            <h5><strong>Okapadel</strong></h5>
            <ul class="widget-list">
              <NuxtLink class="" rel="" to="/fr/a-propos-de-nous">
                <li class="widget-list-item">C'est quoi Okapadel?</li>
              </NuxtLink>
              <NuxtLink class="" rel="" to="/fr/contact">
                <li class="widget-list-item">Contact</li>
              </NuxtLink>
              <NuxtLink class="" rel="" to="https://okatent.com/blog-3">
                <li class="widget-list-item">Blog</li>
              </NuxtLink>
            </ul>
          </div>
          <div class="col-12 col-lg-6 mb-4">
            <div class="d-flex-inline">
              <div class="mb-4">
                <h5><strong>Parle plus tard?</strong></h5>
                <p>
                  Vous pouvez contacter en appelant
                  <a href="tel:93 323 19 74" rel="nofollow"
                    ><strong class="text-nowrap">93 323 19 74</strong></a
                  >
                  ou en envoyant un email à
                  <a href="mail:info@okapadel.com" rel="nofollow"
                    ><strong>info@okapadel.com</strong></a
                  >
                </p>
              </div>
              <div>
                <h5><strong>Où sommes-nous?</strong></h5>
                <p>
                  C/Dels Tintorers s/n parcela 5, Polígono Industrial Can
                  Singlá. Olesa de Montserrat. Barcelona (España)<br />
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-3 text-md-center">
            <h5><strong>Trouve nous</strong></h5>
            <ul class="widget-list">
              <li class="widget-list-item">Linkedin</li>
              <li class="widget-list-item">Instagram</li>
              <li class="widget-list-item">Facebook</li>
            </ul>
          </div>
        </div>
        <div class="row pt-5">
          <!-- <div class="bottom-bar d-flex justify-content-between">
            <div class="bottom-bar-link pr-5">Aviso legal</div>|
            <div class="bottom-bar-link pr-5 pl-5">Condiciones de uso</div>|
            <div class="bottom-bar-link pr-5 pl-5">Políticas de cookies</div>|
            <div class="bottom-bar-link pl-5">Política de datos y privacidad</div>
            <div class="text-right px-5">&copy; Okapadel 2022</div>
          </div> -->
        </div>
      </div>
    </footer>
  </div>
</template>


<script setup>
useHead({
  htmlAttrs: {
    lang: "fr",
  },
});
</script>