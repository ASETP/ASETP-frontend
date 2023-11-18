<template>
  <div class="chat-window">
    <!-- 显示聊天消息的容器 -->
    <el-container class="message-container">
      <el-header
          style="margin-top: 50px;line-height:1.7;font: 20px Extra large"

          class="el-icon-question">
        Stack Overflow 问答
      </el-header>
      <div v-for="message in messages" :key="message.id" class="message">
        <div v-if="message.isMe" class="message-text mine">{{ message.text }}</div>
        <div v-else class="message-text">{{ message.text }}</div>
      </div>
    </el-container>
    <!-- 输入消息的表单 -->
    <form class="input-form">
      <el-input
          v-model="inputText"
          type="textarea"
          :rows="2"
          placeholder="Enter question..." />
      <div style="margin-top: 5px">
        <el-button
            @click="sendMessage"
            v-loading.fullscreen.lock="loading"
            size="mini">
          发送
        </el-button>
        <el-button
            @click="test"
            v-loading.fullscreen.lock="loading"
            size="mini">
          测试
        </el-button>
      </div>
    </form>
  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  data() {
    return {
      inputText: '',
      messages: [],
      loading: false
    };
  },
  methods: {
    sendMessage() {
      if (this.inputText.trim()) {
        this.loading = true;
        this.messages.push({ id: Date.now(), text: this.inputText, isMe: true });

        request.get("/query/"+this.inputText).then(res=>{
          console.log(res);
          this.messages.push({ id: Date.now(), text: res.answer, isMe: false });
        })
        this.inputText = '';
        this.loading = false;
      }
    },
    test(){
      if (this.inputText.trim()) {
        this.loading = true;
        this.messages.push({ id: Date.now(), text: this.inputText, isMe: true });

        request.get("/").then(res=>{
          console.log(res);
          this.messages.push({ id: Date.now(), text: res.message, isMe: false });
        })
        this.inputText = '';
        this.loading = false;
      }
    }
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
