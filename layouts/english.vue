<template>
  <div class="layout">
    <header class="header-okapadel">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark py-4">
          <a class="navbar-brand" href="/en" rel="">
            <nuxt-img
              src="/images/okapadel_mainlogo-alt.svg"
              width="150"
              alt="okapadel logo"
            />
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/en/solutions">
                  Solutions
                </NuxtLink>
                <div class="nav-item-submenu">
                  <ul>
                    <li class="nav-item">
                      <NuxtLink class="nav-link" rel="" to="/en/courts">
                        <i class="fa-fw fa-solid fa-plus g-text"></i>Courts
                      </NuxtLink>
                    </li>
                    <li class="nav-item">
                      <NuxtLink
                        class="nav-link"
                        rel=""
                        to="/en/covers-and-canopies"
                      >
                        <i class="fa-fw fa-solid fa-plus g-text"></i>Covers and
                        Canopies
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/en/padel-facilities"
                  >Padel Facilities</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/en/projects"
                  >Projects</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/en/quality"
                  >Quality</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/en/about-us"
                  >About us</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/en/contact-us"
                  >Contact us</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/en/more-okapadel"
                  ><i class="fa-fw fa-solid fa-plus g-text"></i>Okapadel
                </NuxtLink>
              </li>
            </ul>
          </div>
          <Burger>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/en/solutions"
                  >Solutions</NuxtLink
                >
                <ul class="navbar-submenu-mobile">
                  <li class="nav-item">
                    <NuxtLink class="nav-link" rel="" to="/en/courts"
                      ><i class="fa-fw fa-solid fa-plus g-text"></i>Courts
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink
                      class="nav-link"
                      rel=""
                      to="/en/covers-and-canopies"
                    >
                      <i class="fa-fw fa-solid fa-plus g-text"></i>Covers and
                      Canopies
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/en/padel-facilities"
                  >Padel Facilities
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/en/projects"
                  >Projects</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/en/quality">
                  Quality</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/en/about-us"
                  >About us</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/en/contact-us"
                  >Contact us</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/en/more-okapadel"
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
              <NuxtLink class="" rel="" to="/en">
                <li class="widget-list-item">What is Okapadel?</li>
              </NuxtLink>
              <NuxtLink class="" rel="" to="/en/contact-us">
                <li class="widget-list-item">Contact us</li>
              </NuxtLink>
              <NuxtLink class="" rel="" to="https://okatent.com/blog-3">
                <li class="widget-list-item">Blog</li>
              </NuxtLink>
            </ul>
          </div>
          <div class="col-12 col-lg-6 mb-4">
            <div class="d-flex-inline">
              <div class="mb-4">
                <h5><strong>Want to talk?</strong></h5>
                <p>
                  You can call us at
                  <a href="tel:93 323 19 74" rel="nofollow"
                    ><strong class="text-nowrap">93 323 19 74</strong></a
                  ><br />
                  or send an email at
                  <a href="mail:info@okapadel.com" rel="nofollow"
                    ><strong>info@okapadel.com</strong></a
                  >
                </p>
              </div>
              <div>
                <h5><strong>Where we are?</strong></h5>
                <p>
                  C/Dels Tintorers s/n parcela 5, Pol??gono Industrial Can
                  Singl??. Olesa de Montserrat. Barcelona (Espa??a)<br />
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-3 text-md-center">
            <h5><strong>Find us</strong></h5>
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
            <div class="bottom-bar-link pr-5 pl-5">Pol??ticas de cookies</div>|
            <div class="bottom-bar-link pl-5">Pol??tica de datos y privacidad</div>
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
    lang: "en",
  },
});
</script>