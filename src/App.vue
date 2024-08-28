<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const posts = ref([]);

fetch("https://66ccd18b8ca9aa6c8cc8cbc0.mockapi.io/post")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    posts.value = data;
  });
</script>

<template>
  <header>
    <div class="wrapper">
      <button class="post-btn">
        <RouterLink class="link-style" to="/create-post">
          New Post
          <img
            class="plus"
            src="/src/assets/Icons/plus-svgrepo-com.svg"
            alt=""
          />
        </RouterLink>
      </button>

      <RouterLink class="" to="/">
        <img
          class="instagram-logo"
          src="/src/assets/logo.png"
          alt="instagram logo"
        />
      </RouterLink>
    </div>
  </header>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.instagram-logo {
  width: 200px;
  margin-top: 40px;
  margin-bottom: 60px;
}

.post-btn {
  padding: 10px;
  background-color: #000;
  color: #fff;
  border-radius: 2px;
  font-size: 1rem;
  margin-left: auto;
}

.post-btn a {
  text-decoration: none;
}
.post-btn a:visited {
  color: #fff;
}
.post-btn:hover {
  cursor: pointer;
}
.plus {
  width: 12px;
  filter: invert(100%) sepia(1%) saturate(137%) hue-rotate(220deg)
    brightness(120%) contrast(100%);
  margin-left: 5px;
}

/* .posts-wrapper {
  display: flex;
  flex-direction: column;
  margin: 40px auto;
} */
</style>
