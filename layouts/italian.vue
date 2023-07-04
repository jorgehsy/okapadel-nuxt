<template>
  <div class="layout">
    <header class="header-okapadel">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark py-4">
          <a class="navbar-brand" href="/it" rel="">
            <nuxt-img
              src="/images/okapadel_mainlogo-alt.svg"
              width="150"
              alt="okapadel logo"
            />
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/it/soluzioni">
                  Prodotti
                </NuxtLink>
                <div class="nav-item-submenu">
                  <ul>
                    <li class="nav-item">
                      <NuxtLink class="nav-link" rel="" to="/it/campi">
                        <i class="fa-fw fa-solid fa-plus g-text"></i>Campi
                      </NuxtLink>
                    </li>
                    <li class="nav-item">
                      <NuxtLink class="nav-link" rel="" to="/it/coperture">
                        <i class="fa-fw fa-solid fa-plus g-text"></i>Coperture
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <NuxtLink
                  class="nav-link"
                  rel=""
                  to="/it/installazioni-di-padel"
                  >Installazioni di Padel</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/it/progetti"
                  >Progetti</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/it/qualita"
                  >Qualità</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/it/noi">Noi</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/it/contatti"
                  >Contatti</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/it/plus-okapadel"
                  ><i class="fa-fw fa-solid fa-plus g-text"></i>Okapadel
                </NuxtLink>
              </li>
            </ul>
          </div>
          <Burger>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/it/soluzioni"
                  >Prodotti</NuxtLink
                >
                <ul class="navbar-submenu-mobile">
                  <li class="nav-item">
                    <NuxtLink class="nav-link" rel="" to="/it/campi"
                      ><i class="fa-fw fa-solid fa-plus g-text"></i>Campi
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink class="nav-link" rel="" to="/it/coperture">
                      <i class="fa-fw fa-solid fa-plus g-text"></i>Coperture
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NuxtLink
                  class="nav-link"
                  rel=""
                  to="/it/installazioni-di-padel"
                  >Installazioni di Padel
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/it/progetti"
                  >Progetti</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/it/qualita"
                  >Qualità</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/it/noi">Noi</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/it/contatti"
                  >Contatti</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/it/plus-okapadel"
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
              <NuxtLink class="" rel="" to="/it/noi">
                <li class="widget-list-item">Cos'è Okapadel?</li>
              </NuxtLink>
              <NuxtLink class="" rel="" to="/it/contatti">
                <li class="widget-list-item">Contatti</li>
              </NuxtLink>
              <NuxtLink class="" rel="" to="https://okatent.com/blog-3">
                <li class="widget-list-item">Blog</li>
              </NuxtLink>
            </ul>
          </div>
          <div class="col-12 col-lg-6 mb-4">
            <div class="d-flex-inline">
              <div class="mb-4">
                <h5><strong>Parli dopo?</strong></h5>
                <p>
                  Puoi contattare chiamando
                  <a href="tel:93 323 19 74" rel="nofollow"
                    ><strong class="text-nowrap">93 323 19 74</strong></a
                  >
                  oppure inviando una mail a
                  <a href="mail:info@okapadel.com" rel="nofollow"
                    ><strong>info@okapadel.com</strong></a
                  >
                </p>
              </div>
              <div>
                <h5><strong>Dove siamo?</strong></h5>
                <p>
                  C/Dels Tintorers s/n parcela 5, Polígono Industrial Can
                  Singlá. Olesa de Montserrat. Barcelona (España)<br />
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-3 text-md-center">
            <h5><strong>Trovaci</strong></h5>
            <ul class="widget-list">
              <li class="widget-list-item">Linkedin</li>
              <li class="widget-list-item">Instagram</li>
              <li class="widget-list-item">Facebook</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="bottom-bar d-flex w-100 justify-content-center">
            <div class="bottom-bar-link pr-5 pl-5"> <a href="https://okatent.com/it/note-legali/" target="_blank" ref="noopener noreferrer nofollow"> Note Legali </a></div>|
            <div class="bottom-bar-link pr-5 pl-5"> <a href="https://okatent.com/it/politica-dei-cookie/"  target="_blank" ref="noopener noreferrer nofollow">Politica dei Cookie </a></div>|
            <div class="text-right px-5">Okapadel &copy; 2023 </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: "it",
  },
});
</script>