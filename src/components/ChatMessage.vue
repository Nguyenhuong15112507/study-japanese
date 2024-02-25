<template>
    <div class="chat-app">
  <div class="sidebar">
    <div class="search-bar">
      <input type="text" placeholder="Tìm kiếm bạn bè">
    </div>
    <div class="friend-list">
      <div class="friend-item" v-for="friend in friends" :key="friend.id">
        <img :src="friend.avatar" alt="Avatar">
        <div class="friend-info">
          <p class="friend-name">{{ friend.name }}</p>
          <p class="friend-status">{{ friend.status }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="main-chat">
    <div class="chat-header">
      <img :src="currentFriend.avatar" alt="Avatar">
      <div class="friend-info">
        <p class="friend-name">{{ currentFriend.name }}</p>
        <p class="friend-status">{{ currentFriend.status }}</p>
      </div>
    </div>
    <div class="chat-messages">
      <div class="message-item" v-for="message in messages" :key="message.id">
        <div class="message-sender">
          {{ message.sender }}
        </div>
        <div class="message-content">
          {{ message.content }}
        </div>
      </div>
    </div>
    <div class="chat-input">
      <input type="text" v-model="newMessage" placeholder="Nhập tin nhắn">
      <button @click="sendMessage">Gửi</button>
    </div>
  </div>
  <div class="friend-info-panel">
    <div class="friend-info-header">
      <h2>Thông tin bạn bè</h2>
    </div>
    <div class="friend-info-content">
      <img :src="currentFriend.avatar" alt="Avatar">
      <div class="friend-info-details">
        <p class="friend-name">{{ currentFriend.name }}</p>
        <p class="friend-email">{{ currentFriend.email }}</p>
        <p class="friend-phone">{{ currentFriend.phone }}</p>
      </div>
    </div>
  </div>
</div>

</template>
<script setup>
import { ref } from 'vue';

const friends = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    status: "Online",
  },
  {
    id: 2,
    name: "Jane Doe",
    avatar: "https://randomuser.me/api/portraits/women/75.jpg",
    status: "Offline",
  },
  {
    id: 3,
    name: "Peter Smith",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    status: "Busy",
  },
];

const currentFriend = ref(friends[0]);
const messages = ref([]);
const newMessage = ref("");

function sendMessage() {
  const message = {
    sender: "Me",
    content: newMessage.value,
  };

  messages.value.push(message);
  newMessage.value = "";
}


</script>




<style scoped>
.chat-app {
    position: relative;
    top: 220px;
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 200px;
  background-color: #f7f7f7;
  border-right: 1px solid #ddd;
}

.search-bar {
  padding: 10px;
}

.friend-list {
  overflow-y: auto;
}

.friend-item {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f2f2f2;
  }
}

.friend-item img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.friend-info {

}

.friend-name {
  font-weight: bold;
}

.friend-status {
  font-size: 12px;
  color: #999;
}

.main-chat {
  flex: 1;
  height: 100vh;
  background-color: #fff;
}

.chat-header {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.chat-header img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.chat-messages {
  height: calc(100vh - 160px);
}
</style>