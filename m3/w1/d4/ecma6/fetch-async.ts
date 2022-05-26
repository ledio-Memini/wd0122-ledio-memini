async function call(){

    const url = 'https://628f5a21dc478523653ef20c.mockapi.io/api/v1/users';

    let response = await fetch(url);

    /**
     *  let all = promise.All([
     *      fetch(urlutenti),
     *      fetch(urlIndirizzi),
     *      fetch(urlnumeritelefono),
     *      
     * ])
     */

    let json = await response.json();

    
    let {avatar,name} = json[0];
    
    console.log(avatar,name);
}
call()