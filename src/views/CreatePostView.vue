<script setup>
import { ref } from "vue";

const userName = ref("");
const likes = ref(0);
const postURL = ref("");
const caption = ref("");
const userURL = ref("");

function postData() {
  const formData = {
    username: userName.value,
    likes: likes.value,
    postimage: postURL.value,
    caption: caption.value,
    userimage: userURL.value,
  };
  fetch("https://66ccd18b8ca9aa6c8cc8cbc0.mockapi.io/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
</script>
<template>
  <div class="wrapper">
    <form @submit.prevent="postData()">
      <!-- Username Field -->
      <div class="input">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          v-model="userName"
        /><br /><br />
      </div>
      <div class="input">
        <label for="likes">Likes:</label>
        <input
          type="number"
          id="likes"
          name="likes"
          v-model="likes"
        /><br /><br />
      </div>
      <div class="input">
        <label for="postimage">Post Image URL:</label>
        <input
          type="url"
          id="postimage"
          name="postimage"
          v-model="postURL"
        /><br /><br />
      </div>
      <div class="input">
        <label for="caption">Caption:</label>
        <input
          type="text"
          id="caption"
          name="caption"
          v-model="caption"
        /><br /><br />
      </div>
      <div class="input">
        <label for="userimage">User Image URL:</label>
        <input
          type="url"
          id="userimage"
          name="userimage"
          v-model="userURL"
        /><br /><br />
      </div>
      <input type="submit" value="Post" class="submit-btn" />
    </form>
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

form {
  width: 300px;
  height: auto;
}

.input {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

input[type="text"],
input[type="number"],
input[type="url"] {
  height: 40px;
  border-radius: 4px;
  border: none;
  background-color: rgb(242, 242, 242);
  padding-left: 10px;
}

.submit-btn {
  padding: 10px 40px;
  background-color: #000;
  color: #fff;
  border-radius: 3px;
  font-size: 1rem;
  width: 100%;
}
</style>
