<template>
    <div class="timer">
        <div class="title">
            <h3> {{ title }} </h3>
        </div>
        <div class="counter title">
            <h2> {{ hours | twoDigits }} : {{ minutes | twoDigits }} : {{ seconds | twoDigits }} </h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'timerComponent',
    props: ['title', 'finishTime'],
    data() {
        return {
            now: ''
        }
    },
    computed: {
        ends() {
            return this.getTime(this.finishTime);
        },
        seconds() {
            return (this.ends - this.now) % 60
        },
        minutes() {
            return Math.trunc((this.ends - this.now) / 60) % 60
        },
        hours() {
            return Math.trunc((this.ends - this.now) / 60 / 60) % 24       
        }
    },
    filters: {
        twoDigits(input) {
            const text = ''+input;
            return text.length <= 1 ? '0'+input : input;
        }
    },
    methods: {
        getTime(time = '') {
            const date = time.length ? new Date(time) : new Date()
            return Math.trunc(date.getTime() / 1000);
        }
    },
    mounted() {
        setInterval(() => {
            this.now = this.getTime();
        }, 1000);
    }
}
</script>

<style>
        .title {
            text-align: center;
        }

        .counter {
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
        }
</style>
