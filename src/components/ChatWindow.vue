<template>
  <el-container class="el-container"
                style="min-height: 100%;min-width: 100%">
    <div class="chat-window">
      <!-- 显示消息的容器 -->
      <el-container class="message-container" style="height: 540px">
        <el-header
            style="height:20px;margin-top: 50px;line-height:1.7;font: 20px Extra large">
           Stack Overflow 问答
        </el-header>

        <ul class="infinite-list" v-infinite-scroll="load"
            style="height:470px;width:460px;overflow:auto">
          <li v-for="message in messages" :key="message.id" class="message">
            <div v-if="message.isMe" class="message-text mine">
              <p style="word-wrap:break-word;font-size: small;">{{ message.text }}</p>
            </div>
            <div v-else class="message-text">
              <p style="word-wrap:break-word;font-size: small;">{{ message.text }}</p>
            </div>
          </li>
        </ul>
      </el-container>

      <!-- 输入消息 -->
      <form class="input-form" style="width: 500px;margin-left:10px;margin-bottom: 15px">
        <el-input
            v-model="inputText"
            type="textarea"
            :rows="3"
            placeholder="Enter question..." />
        <div style="margin-top: 10px">
          <el-button
              @click="sendMessage"
              v-loading.fullscreen.lock="loading"
              size="mini"
              type="primary">
            发送
          </el-button>
          <el-button
              @click="test"
              v-loading.fullscreen.lock="loading"
              size="mini"
              type="success">
            测试
          </el-button>
          <el-button
              plain
              @click="openShow"
              size="mini"
              type="info">
            可视化
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
      loading: false,
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
          this.loading = false;
          this.inputText = '';
        })
      }
    },
    test(){
      if (this.inputText.trim()) {
        this.loading = true;
        this.messages.push({ id: Date.now(), text: this.inputText, isMe: true });

        request.get("/").then(res=>{
          console.log(res);
          this.messages.push({ id: Date.now(), text: res.message, isMe: false });
          this.loading = false;
          this.inputText = '';
        })
      }
    },
    openShow(){
      window.location.href = 'https://workspace-preview.neo4j.io'
      window.open('https://workspace-preview.neo4j.io/workspace/query',"_blank")
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
  margin-bottom: 5px;
}

.message {
  padding: 3px;
  margin-bottom: 3px;
}

.message-text {
  padding: 5px;
  border-radius: 3px;
  width: 430px;
}

.mine {
  background-color: lightblue;
}
</style>
