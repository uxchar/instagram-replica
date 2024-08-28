<script setup>
import { ref } from "vue";
import PostCard from "@/components/PostCard.vue";

const posts = ref([]);

fetch("https://66ccd18b8ca9aa6c8cc8cbc0.mockapi.io/post")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    posts.value = data;
  });
</script>

<template>
  <div class="wrapper">
    <div class="posts-wrapper" v-for="post in posts" :key="post.id">
      <PostCard :post="post" />
    </div>
  </div>
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
.posts-wrapper {
  display: flex;
  flex-direction: column;
  margin: 40px auto;
}

.post-btn {
  padding: 10px 20px;
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
</style>
