primero de todo instalamos k3s, le damos permisos de root para no tener que escirbir el comando sudo en cada ejecucion, y nos bajamos el kubctl completions

echo "source <(kubectl completion zsh)" >> ~/.zshrc
source ~/.zshrc

y añadimos el alias de k a kubectl para que sea mas rapido la ejecucion de comandos

echo "alias k=kubectl" >> ~/.zshrc
source ~/.zshrc

desplegamos el primer deployemnt y servicio, comprobamos que funciona bien el auto-healing y el scale-in/out de neustro edployment borrando manualemtne pods

kubectl scale deployment demo-nginx --replicas=3
kubectl scale deployment demo-nginx --replicas=1

primer commit al repo 