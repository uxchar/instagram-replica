<script setup>
const props = defineProps(["post"]);
</script>

<template>
  <div class="card-wrapper">
    <div class="creator">
      <div class="right">
        <div class="creator-thumbnail">
          <img class="user-image" :src="post.userimage" alt="" />
        </div>
        <div class="username">
          <span>{{ post.username }}</span>
        </div>
      </div>
      <div class="left">
        <div class="more">
          <img
            class="more-btn"
            src="/src/assets/Icons/more.svg"
            alt="more button"
          />
        </div>
      </div>
    </div>
    <div class="post-content">
      <img class="creator-image-post" :src="post.postimage" alt="" />
    </div>
    <div class="creator-info">
      <div class="interaction-section">
        <div class="like-comment-share">
          <img
            class="like-btn icon-btn"
            src="/src/assets/icons/like.svg"
            alt="like button"
          />
          <img
            class="comment-btn icon-btn"
            src="/src/assets/icons/comment.svg"
            alt="comment button"
          />
          <img
            class="share-btn icon-btn"
            src="/src/assets/icons/share.svg"
            alt="share button"
          />
        </div>

        <div class="bookmark-wrapper">
          <img
            class="bookmark-btn icon-btn"
            src="/src/assets/icons/bookmark.svg"
            alt="bookmark button"
          />
        </div>
      </div>
      <hr />
      <div class="likes">
        <span>{{ post.likes }} likes</span>
      </div>
      <div class="caption">
        <p>{{ post.caption }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  width: 375px;
  height: 600px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
}

.creator {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  padding-top: 10px;
}

.right {
  display: flex;
  gap: 10px;
}

.user-image {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.username {
  padding-top: 5px;
  font-weight: 600;
  font-size: 0.85rem;
}

.more-btn {
  width: 16px;
  height: 16px;
  padding-top: 6px;
  filter: invert(28%) sepia(1%) saturate(2872%) hue-rotate(317deg)
    brightness(92%) contrast(80%);
}

.like-comment-share {
  display: flex;
  gap: 15px;
}

.creator-image-post {
  width: 375px;
}

.interaction-section {
  display: flex;
  justify-content: space-between;
}

.icon-btn {
  width: 20px;
  height: 20px;
}

.caption,
.creator,
.interaction-section,
.likes,
hr {
  margin: 10px;
}

hr {
  margin-top: 5px;
  border: 1px solid #f0f0f0;
}

.likes {
  font-weight: 600;
  font-size: 0.9rem;
}

.creator,
.icon-btn,
.more-btn,
.likes :hover {
  cursor: pointer;
}

.caption {
  padding-bottom: 10px;
  font-size: 0.9rem;
}
</style>
