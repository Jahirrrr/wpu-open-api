/**
 * @maintainer: Zahirrrr
 * @license MIT
 * @project WPU-Open-Api
 */


__path = process.cwd()

const scrapertools = require('scraper-tools');

var express = require('express');
var router = express.Router();


router.get('/infogempa', async (req, res, next) => {
    scrapertools.bmkg.gempaterkini()
        .then(data => {
            res.json({
                status : true,
                maintainer : `Zahirrrr`,
                result : data
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 maintainer : `Zahirrrr`,
                 message : "mungkin api sedang diperbaiki"
             })
         })
})


router.get('/bioskopcomingsoon', async (req, res) => {
    scrapertools.film.bioskopcomingsoon()
        .then(data => {
            res.json({
                status : true,
                maintainer : `Zahirrrr`,
                result : data
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 maintainer : `Zahirrrr`,
                 message : "mungkin api sedang diperbaiki"
             })
         })
})


router.get('/wallpaper', async (req, res) => {

    cari = req.query.search,
    pages = req.query.page;

    scrapertools.wallpaper.search(cari, pages)
        .then(data => {
            res.json({
                status : true,
                maintainer : `Zahirrrr`,
                result : data
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 maintainer : `Zahirrrr`,
                 message : "mungkin api sedang diperbaiki"
             })
         })
})


router.get('/kbbi', async (req, res) => {

    var kataa = req.query.kata;

    scrapertools.kemdikbud.kbbi(kataa)
        .then(data => {
            res.json({
                status : true,
                maintainer : `Zahirrrr`,
                result : data
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 maintainer : `Zahirrrr`,
                 message : "mungkin api sedang diperbaiki"
             })
         })
})

router.get('/datamasjid', async (req, res) => {

propinsi = req.query.provinsi,
pages = req.query.page;

    scrapertools.stayhalal.datamasjid(propinsi, pages)
        .then(data => {
            res.json({
                status : true,
                maintainer : `Zahirrrr`,
                result : data
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 maintainer : `Zahirrrr`,
                 message : "mungkin api sedang diperbaiki"
             })
         })
})

router.get('/listkota', async (req, res) => {   
        scrapertools.stayhalal.listkota()
            .then(data => {
                res.json({
                    status : true,
                    maintainer : `Zahirrrr`,
                    result : data
                })
            })
            .catch(e => {
                 res.json({
                     status : false,
                     maintainer : `Zahirrrr`,
                     message : "mungkin api sedang diperbaiki"
                 })
             })
    })

module.exports = router;
