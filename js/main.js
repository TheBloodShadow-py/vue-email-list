"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],
    };
  },
  methods: {
    getEmails: function (num) {
      for (let i = 0; i < num; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
          this.emails.push(resp.data.response);
        });
      }
    },
  },
  created() {
    this.getEmails(10);
  },
}).mount("#app");
