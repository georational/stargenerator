while $1; do
while IFS=, read place ndd; do
	prefixe="http://www."
	url="$prefixe$ndd"
	echo $place ;date
	echo $url
	bin/phantomjs my_loadspeed_v6.js $url
done <top-1m.csv
done
