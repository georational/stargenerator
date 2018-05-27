# Stargenerator
Generates web and DNS traffic by loading web pages from the Top 1M of Alexa. 
Forked from **lcpdn/traffic_generator**


* Download/unzip or clone PhantomJS  
* Copy the Stargenerator files to the root of your PhantomJS directory
* Execute ./generate.sh via
`nohup ./generate.sh > pictures/stargenerator.txt &`
* Saves screen shots to `pictures/`
* Timer preset to execute between 1.00AM and 6.59AM
* Check progress with `tail -f ~ pictures/stargenerator.txt` and `pictures | wc -l`

## Further reading

[Installing PhantomJS on the Raspberry Pi](http://www.bitpi.co/2015/02/10/installing-phantomjs-on-the-raspberry-pi/)

[Investigatory Powers Act 2016](https://en.wikipedia.org/wiki/Investigatory_Powers_Act_2016)

[The Star Generator](http://spacequest.wikia.com/wiki/Star_Generator)


