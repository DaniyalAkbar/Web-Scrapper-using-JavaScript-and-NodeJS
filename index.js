const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')
const { response } = require('express')

const PORT = 8000
const app = express()

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`))


axios('https://programatically.com').then(
    response => {
        const html = response.data
        const $ = cheerio.load(html)
        var list = []
        
        $('.heading-title-text').each(function() {
            const blog_title = $(this).text()
            const blog_link = $(this).find('a').attr('href')
            list.push( {blog_title, blog_link} )
        })
        console.log(list)
    }
).catch(err => console.log(err))
