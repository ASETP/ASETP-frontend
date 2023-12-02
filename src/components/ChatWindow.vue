<template>
  <el-container class="el-container"
                style="min-height: 100%;min-width: 100%; border: 1px solid #eee">
    <div class="chat-window">
      <!-- 显示消息的容器 -->
      <el-container class="message-container" style="height: 540px">
        <el-header
            style="margin-top: 50px;line-height:1.7;font: 20px Extra large"
            class="el-icon-question">
          Stack Overflow 问答
        </el-header>
        <ul class="infinite-list" v-infinite-scroll="load"
            style="height:400px;width:460px;overflow:auto">
          <li v-for="message in messages" :key="message.id" class="message">
            <div v-if="message.isMe" class="message-text mine">{{ message.text }}</div>
            <div v-else class="message-text">{{ message.text }}</div>
          </li>
        </ul>
      </el-container>

      <!-- 输入消息 -->
      <form class="input-form" style="width: 500px;margin-left:10px;margin-bottom: 30px">
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
  </el-container>
</template>

<script>
import request from "@/utils/request";

export default {
  data() {
    return {
      inputText: '',
      messages: [],
      count:0,
      loading: false
    };
  },
  methods: {
    load () {
      this.count += 2
    },
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
  max-width: 600px;
  margin: 0 auto;
}

.message-container {
  margin-bottom: 10px;
}

.message {
  padding: 3px;
  margin-bottom: 3px;
}

.message-text {
  padding: 5px;
  border-radius: 3px;
}

.mine {
  background-color: lightblue;
}
</style>
