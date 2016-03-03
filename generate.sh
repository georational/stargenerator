while IFS=, read place ndd; do
	prefixe="http://www."
	url="$prefixe$ndd"
	echo $url
	./bin/phantomjs loadspeed.js $url
done <top-1m.csv
