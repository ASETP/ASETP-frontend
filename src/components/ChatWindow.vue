<template>
  <div class="chat-window">
    <!-- 显示聊天消息的容器 -->
    <div class="message-container">
      <div v-for="message in messages" :key="message.id" class="message">
        <div v-if="message.isMe" class="message-text mine">{{ message.text }}</div>
        <div v-else class="message-text">{{ message.text }}</div>
      </div>
    </div>
    <!-- 输入消息的表单 -->
    <form class="input-form">
      <el-input
          v-model="inputText"
          type="textarea"
          :rows="2"
          placeholder="Enter question..." />
      <el-button
          @click="sendMessage"
          size="mini"
      >
        发送
      </el-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '',
      messages: [
        { id: 1, text: '请输入问题', isMe: false },
      ],
    };
  },
  methods: {
    sendMessage() {
      if (this.inputText.trim()) {
        console.log(Date.now());
        this.messages.push({ id: Date.now(), text: this.inputText, isMe: true });
        this.messages.push({ id: Date.now(), text: '回复', isMe: false });
        this.inputText = '';
      }
    },
  },
};
</script>

<style scoped>
.chat-window {
  max-width: 400px;
  margin: 0 auto;
}

.message-container {
  margin-bottom: 10px;
}

.message {
  padding: 5px;
  margin-bottom: 5px;
}

.message-text {
  padding: 10px;
  border-radius: 5px;
}

.mine {
  background-color: lightblue;
}
</style>
