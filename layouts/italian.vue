<template>
  <div class="layout">
    <header class="header-okapadel">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark py-4">
          <a class="navbar-brand" href="/it" rel="">
            <nuxt-img
              src="/okapadel_mainlogo-alt.svg"
              width="150"
              alt="okapadel logo"
            />
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/soluciones">
                  Soluciones
                </NuxtLink>
                <div class="nav-item-submenu">
                  <ul>
                    <li class="nav-item">
                      <NuxtLink class="nav-link" rel="" to="/pistas">
                        <i class="fa-fw fa-solid fa-plus g-text"></i>Pistas
                      </NuxtLink>
                    </li>
                    <li class="nav-item">
                      <NuxtLink class="nav-link" rel="" to="/cubiertas">
                        <i class="fa-fw fa-solid fa-plus g-text"></i>Cubiertas
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/instalaciones-de-padel"
                  >Instalaciones de Pádel</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/proyectos"
                  >Proyectos</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/calidad"
                  >Calidad</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/nosotros"
                  >Nosotros</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/contacto"
                  >Contacto</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" rel="" to="/plus-okapadel"
                  ><i class="fa-fw fa-solid fa-plus g-text"></i>Okapadel
                </NuxtLink>
              </li>
            </ul>
          </div>
          <!-- <ClientOnly>
            <Slide right class="burger">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <NuxtLink class="nav-link" rel="" to="/soluciones"
                    >Soluciones</NuxtLink
                  >
                  <ul class="navbar-submenu-mobile">
                    <li class="nav-item">
                      <NuxtLink class="nav-link" rel="" to="/pistas"
                        ><i class="fa-fw fa-solid fa-plus g-text"></i>Pistas
                      </NuxtLink>
                    </li>
                    <li class="nav-item">
                      <NuxtLink class="nav-link" rel="" to="/cubiertas">
                        <i class="fa-fw fa-solid fa-plus g-text"></i>Cubiertas
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <NuxtLink class="nav-link" rel="" to="/instalaciones-de-padel"
                    >Instalaciones de Pádel
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink class="nav-link" rel="" to="/proyectos"
                    >Proyectos</NuxtLink
                  >
                </li>
                <li class="nav-item">
                  <NuxtLink class="nav-link" rel="" to="/calidad">Calidad</NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink class="nav-link" rel="" to="/nosotros"
                    >Nosotros</NuxtLink
                  >
                </li>
                <li class="nav-item">
                  <NuxtLink class="nav-link" rel="" to="/contacto"
                    >Contacto</NuxtLink
                  >
                </li>
                <li class="nav-item">
                  <NuxtLink class="nav-link" rel="" to="/plus-okapadel"
                    >+Okapadel</NuxtLink
                  >
                </li>
              </ul>
            </Slide>
          </ClientOnly> -->
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
              <NuxtLink class="" rel="" to="/">
                <li class="widget-list-item">Home</li>
              </NuxtLink>
              <NuxtLink class="" rel="" to="/contacto">
                <li class="widget-list-item">Contacto</li>
              </NuxtLink>
              <NuxtLink class="" rel="" to="https://okatent.com/blog-3/">
                <li class="widget-list-item">Blog</li>
              </NuxtLink>
            </ul>
          </div>
          <div class="col-12 col-lg-6 mb-4">
            <div class="d-flex-inline">
              <div class="mb-4">
                <h5><strong>¿Hablamos?</strong></h5>
                <p>
                  Puedes contactar llamando al
                  <a href="tel:93 323 19 74" rel="nofollow"
                    ><strong class="text-nowrap">93 323 19 74</strong></a
                  >
                  o enviando un e-mail a
                  <a href="mail:info@okapadel.com" rel="nofollow"
                    ><strong>info@okapadel.com</strong></a
                  >
                </p>
              </div>
              <div>
                <h5><strong>¿Dónde estamos?</strong></h5>
                <p>
                  C/Dels Tintorers s/n parcela 5, Polígono Industrial Can
                  Singlá. Olesa de Montserrat. Barcelona (España)<br />
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-3 text-md-center">
            <h5><strong>Encuéntranos</strong></h5>
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
