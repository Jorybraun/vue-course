<script>
    export default {
        name: 'App',
        data() {
            return {
                title: 'Tweet Analyzer 4000', 
                tweets: [
                    { 
                        author: '@theRealTrump',
                        message: 'im gonna build a wall',
                        avatar: ''
                    }
                ]
            }
        },
        template: `
            <div>
                <header>
                    {{ title }}
                </header>
                <main>
                    <ul>
                        <li v-for="(tweet, i) in tweets" :key="i">
                            {{ tweet }}
                        </li>
                    </ul>
                </main>
                <footer>

                </footer>
            </div>
        `
    }
</script>
