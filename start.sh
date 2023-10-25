//start climb-server
nohup npx json-server --watch data/climbs.json --port 8000 &

//start grade-server
nohup npx json-server --watch data/grades.json --port 8080 &

//start gyms-server
nohup npx json-server --watch data/gyms.json --port 8040 &

//start webapp
npm start