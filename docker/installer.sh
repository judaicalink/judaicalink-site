#!/bin/bash

colorred="\033[31m"
colorpowder_blue="\033[1;36m" #with bold
colorblue="\033[34m"
colornormal="\033[0m"
colorwhite="\033[97m"
colorlightgrey="\033[90m"

printf "                   ${colorred} ##       ${colorlightgrey} .         \n"
printf "             ${colorred} ## ## ##      ${colorlightgrey} ==         \n"
printf "           ${colorred}## ## ## ##      ${colorlightgrey}===         \n"
printf "       /\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\\\___/ ===       \n"
printf "  ${colorblue}~~~ ${colorlightgrey}{${colorblue}~~ ~~~~ ~~~ ~~~~ ~~ ~ ${colorlightgrey}/  ===- ${colorblue}~~~${colorlightgrey}\n"
printf "       \\\______${colorwhite} o ${colorlightgrey}         __/           \n"
printf "         \\\    \\\        __/            \n"
printf "          \\\____\\\______/               \n"
printf "${colorpowder_blue}                                          \n"
printf "          |          |                    \n"
printf "       __ |  __   __ | _  __   _          \n"
printf "      /  \\\| /  \\\ /   |/  / _\\\ |     \n"
printf "      \\\__/| \\\__/ \\\__ |\\\_ \\\__  | \n"
printf " ${colornormal}                                         \n"

echo  -e "\033[0;34m" "
                      .(###(.
                     .(#####/
                      /##(##,
                    .#(.   .#(.
    .####(.        *#,       /#,         (###/.
    /########################################(
     .*/##.     *#,/###########,/#,     .###/.
         ,#/  .#(.##############(.#(.  (#.
          .(#/#,/#################,/#*#(
           .##/,###################.(#(
          *#* (#,################(,#( /#.
        .##.   ,#//#############,/#.   .#(
    .#####.     .(#./#########/.#(      .####,
    ##########################################,
     ./(*.         .(#.     .#(          *##/.
                     ,#/   /#,
                      ,#####.
                      (#####*
                       .(#/.                      " 

printf " ${colornormal}                                         \n"

echo "Welcome to JudaicaLink's download generator script!" 
echo "(c) 2022 JudaicaLink" 
echo "Benjamin Schnabel <b.schnabel@hs-mannheim.de>" 
echo "----------------------------------------"  
echo "creating directories..."  

alias python='/usr/bin/python3'

cd /data/judaicalink/web.judaicalink.org/ || exit
chmod +x ./update.sh
chmod +x ./rebuild.sh
echo "done."   

#echo "----------------------------------------"
#echo "downloading Judaicalink site..."
#cd /data/judaicalink/web.judaicalink.org/judaicalink-site/ || exit
#git clone https://github.com/judaicalink/judaicalink-site.git
#latesttag=$(git describe --tags)
#echo checking out ${latesttag}
#git checkout ${latesttag}
#echo "done."  #

echo "----------------------------------------" 
echo "updating and building..." 
cd /data/judaicalink/web.judaicalink.org/  || exit
./update.sh
./rebuild.sh
echo "done."

# TODO: add requirements

python3 -m venv venv
source venv/bin/activate

cd /data/judaicalink/web.judaicalink.org/judaicalink-site/ || exit

pip3 install -r requirements.txt
# Generate statistics
python3 statistics.py

# Generate beacon file
python3 generate_beacon.py