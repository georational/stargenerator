# Stargenerator
Generates DNS traffic by loading webpages from the Top 1M of Alexa


* Download PhantomJS from http://phantomjs.org/download.html
* Unzip the files 
* Copy the Stargenerator files at the root of your phantomjs directory
* Execute ./generate.sh with
`nohup ./generate.sh > pictures/stargenerator.txt &`
* Timer preset to execute between 0.01AM and 6.59AM
* Check progress with `tail -f ~/phantomjs-raspberrypi/pictures/stargenerator.txt` 
and `ls ~/phantomjs-raspberrypi/pictures | wc -l`

## Further reading

[Installing PhantomJS on the Raspberry Pi](http://www.bitpi.co/2015/02/10/installing-phantomjs-on-the-raspberry-pi/)

[Investigatory Powers Act 2016](https://en.wikipedia.org/wiki/Investigatory_Powers_Act_2016)

[The Star Generator](http://spacequest.wikia.com/wiki/Star_Generator)





