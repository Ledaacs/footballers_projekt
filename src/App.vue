<template>
  <div class="video-background">
    <video autoplay muted loop class="blurred-video">
      <source src="/SOCCER.mp4" type="video/mp4" />
    </video>
    <div class="content">
      <div class="container-fluid p-4">
        <header>
          <nav class="d-flex justify-content-between align-items-center mt-2">
            <ul class="nav">
              <li>
                <RouterLink
                  :to="{ path: '/' }"
                  :class="{ active: $route.path === '/' }"
                >
                  Home
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="{ path: '/table' }"
                  :class="{ active: $route.path === '/table' }"
                >
                  Table
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="{ path: '/cards' }"
                  :class="{ active: $route.path === '/cards' }"
                >
                  Cards
                </RouterLink>
              </li>
            </ul>
            <h1 class="project-title">Footballers Project</h1>
          </nav>
        </header>

        <div class="content-area p-2">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>



<style>
nav {
  font-family: "Oswald", sans-serif;
  background: rgba(6, 131, 127, 0.5) !important;
  padding: 20px;
  border-radius: 10px;
  min-height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.video-background {
  position: relative;
  overflow: hidden;
  height: 100vh;
}

.blurred-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translate(-50%, -50%);
  filter: blur(1px) brightness(0.7);
}

.content-area {
  padding: 20px;
}

.nav {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
}

.nav li {
  position: relative;
  margin-right: 15px;
}

.nav li a {
  font-family: "Oswald", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-black-700);
  padding: 5px 15px;
  text-decoration: none;
  transition: 0.5s;
}

.nav li a:hover {
  color: #06837f;
}

.nav li a.active {
  font-weight: 700;
}

.nav li a.active::after {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  background-color: var(--text-color);
  position: absolute;
  bottom: -5px;
  left: 0;
  animation: slideIn 0.3s forwards;
}

@keyframes slideIn {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.project-title {
  margin-left: auto;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
