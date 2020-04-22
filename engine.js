			var hero;
			var ogre;
			var punk;
			var bg2;
			var output;
			var leftArrowDown = false;
			var rightArrowDown = false;
			var upArrowDown = false;
			var spaceArrowDown = false;
			var gameTimer;
			var ogreLife = 25;
			var ogre2Life = 25;
			var punkLife = 100;
			var heroLife = 194;
			var ogreDead = false;
			var ogre2Dead = false;
			var punkDead = false;
			var heroDead = false;
			var ladder;
			var apple;
			var door;
			var btnStart = document.getElementById('btnStart');
			
			
			

			
			

			const GRAVITY = 1;
			var fallSpeed = 0;
			var ogreFall = 0;
			var ogre2Fall = 0;
			var punkFall = 0;
			var stoneFall = 0;


			
			var platforms;
			var level = 1;

			

			var lifebar;
			var numLives = 0;

			function startGame(){
				document.getElementById('introScreen').style.visibility = 'hidden';
				

			}

			function startTutorial(){
				document.getElementById('tutorial').style.visibility = 'visible';
			}

			function goBack(){
				document.getElementById('tutorial').style.visibility = 'hidden';
			}
			
			function init(){
				
				output = document.getElementById('output');
				output.innerHTML = level;

				


				lifebar = document.getElementById('lifebar');
				lifebar.src = 'images/lifebar.gif';
				lifebar.style.width = '290px';
				lifebar.style.height ='100px';
				lifebar.style.left = '700px';
				lifebar.style.top = '0px';

				

				pink = document.getElementById('pink');
				pink.src = 'images/pink.png';
				pink.style.width = '190px';
				pink.style.height ='25px';
				pink.style.left = '780px';
				pink.style.top = '58px';
				//for(var i=0; i<3; i++) addLife();


				hero = document.getElementById('hero');
				hero.style.width = '80px';
				hero.style.height = '80px';
				hero.style.left = '300px';
				hero.style.top = '50px';

				//x y w h
				platforms = new Array();
				addPlatform(0,575,3500,20);
				addPlatform(0,0,100,800);
				addPlatform(1180,330,250,250);
				addPlatform(3500,0,800,800);

				bg = document.getElementById('bg');
				
				

				bg2 = document.getElementById('bg2');
				bg2.style.width = '3000px';
				bg2.style.height = '400px';
				bg2.style.left = '100px';
				bg2.style.top = '200px';

				
				apple = document.getElementById('apple');
				apple.style.width = '40px';
				apple.style.height = '46px';
				apple.style.left = '2300px';
				apple.style.top = '530px';
				
				door = document.getElementById('door');
				door.style.width = '169px';
				door.style.height = '243px';
				door.style.left = '2650px';
				door.style.top = '350px';

				ladder = document.getElementById('ladder');
				ladder.style.width = '72px';
				ladder.style.height = '263px';
				ladder.style.left = '1100px';
				ladder.style.top = '330px';
				
				ogre = document.getElementById('ogre');
				ogre.style.width = '80px';
				ogre.style.height = '80px';
				ogre.style.left = '2000px';
				ogre.style.top = '200px';

				punk = document.getElementById('punk');
				punk.style.width = '80px';
				punk.style.height = '80px';
				punk.style.left = '1500px';
				punk.style.top = '200px';

				
				
			

				

				
				
				
				gameTimer = setInterval(gameloop, 50);
			}

			

			

			function addPlatform(x, y, w, h){
				var p = document.createElement('DIV');
				p.className = 'platform';
				p.style.left = x + 'px';
				p.style.top = y + 'px';
				p.style.width = w + 'px';
				p.style.height = h + 'px';


				platforms.push(p);
				gameWindow.appendChild(p);
			}
			
			
				
				
				
			

			
		


			function nextLevel(){
				document.getElementById('btnContinue').style.display = 'none';

				level++;
				output.innerHTML = level;

				fallSpeed = 0;
				leftArrowDown = false;
				rightArrowDown = false;
				upArrowDown = false;
				spaceArrowDown = false;
				ogreDead = false;
				ogre2Dead = false;
				punkDead = false;
				ogreLife = 25;
				ogre2Life = 25;
				punkLife = 100;
				

				

				for(var i=0; i<platforms.length; i++){
					gameWindow.removeChild(platforms[i]);
				}

				
				platforms = new Array();
				

				
				if(level==1){
					hero = document.getElementById('hero');
				hero.style.width = '80px';
				hero.style.height = '80px';
				hero.style.left = '300px';
				hero.style.top = '50px';

				//x y w h
				platforms = new Array();
				addPlatform(0,575,3500,20);
				addPlatform(0,0,100,800);
				addPlatform(1180,330,250,250);
				addPlatform(3500,0,800,800);

				bg = document.getElementById('bg');
				
				

				bg2 = document.getElementById('bg2');
				bg2.style.width = '3000px';
				bg2.style.height = '400px';
				bg2.style.left = '100px';
				bg2.style.top = '200px';
				
				apple = document.getElementById('apple');
				apple.style.width = '40px';
				apple.style.height = '46px';
				apple.style.left = '2300px';
				apple.style.top = '530px';
				
				door = document.getElementById('door');
				door.style.width = '169px';
				door.style.height = '243px';
				door.style.left = '2650px';
				door.style.top = '350px';

				ladder = document.getElementById('ladder');
				ladder.style.width = '72px';
				ladder.style.height = '263px';
				ladder.style.left = '1100px';
				ladder.style.top = '330px';
				
				ogre = document.getElementById('ogre');
				ogre.style.width = '80px';
				ogre.style.height = '80px';
				ogre.style.left = '2000px';
				ogre.style.top = '200px';

				punk = document.getElementById('punk');
				punk.style.width = '80px';
				punk.style.height = '80px';
				punk.style.left = '1500px';
				punk.style.top = '200px';

				

				


					
				}
				 else if(level==2){
					ogre = document.getElementById('ogre');
				ogre.style.width = '80px';
				ogre.style.height = '80px';
				ogre.style.left = '2000px';
				ogre.style.top = '200px';

				punk = document.getElementById('punk');
				punk.style.width = '80px';
				punk.style.height = '80px';
				punk.style.left = '1500px';
				punk.style.top = '200px';

				hero = document.getElementById('hero');
				hero.style.width = '80px';
				hero.style.height = '80px';
				hero.style.left = '300px';
				hero.style.top = '50px';

				
				bg.src = 'images/black.jpg';
				bg2 = document.getElementById('bg2');
				bg2.style.width = '4000px';
				bg2.style.height = '500px';
				bg2.style.left = '100px';
				bg2.style.top = '200px';
				bg2.src = 'images/castle.jpg';

				door = document.getElementById('door');
				door.src = 'images/dungeonDoor.png';
				door.style.left = '3650px';
				door.style.top = '350px';


				
				

					addPlatform(0,575,4100,20);
					addPlatform(4100,0,600,600);
				}
				else if(level==3){

				bg.src = 'images/black.jpg';
				bg2 = document.getElementById('bg2');
				bg2.style.width = '1000px';
				bg2.style.height = '500px';
				bg2.style.left = '100px';
				bg2.style.top = '200px';
				bg2.src = 'images/bg3.gif';

					addPlatform(100,575,1000,20);
					addPlatform(0,0,100,600);
					addPlatform(1100,0,600,600);

					door = document.getElementById('door');
				door.src = 'images/dungeonDoor.png';
				door.style.left = '700px';
				door.style.top = '350px';

				ogre = document.getElementById('ogre');
				ogre.style.width = '80px';
				ogre.style.height = '80px';
				ogre.style.left = '600px';
				ogre.style.top = '200px';
				ogre.src = 'images/stoneManStand.gif';

				punk = document.getElementById('punk');
				punk.style.width = '80px';
				punk.style.height = '80px';
				punk.style.left = '700px';
				punk.style.top = '200px';
				ogre.src = 'images/stoneManStand.gif';
				
				
				}

				


				
				gameTimer = setInterval(gameloop, 50);
				}



			function removeLife(){
				if(numLives>0){
					numLives--;
					lifebar.removeChild(lifebar.lastChild);
				}
				else{
					gameWindow.innerHTML = '<br><br> LOSER!!';
					gameWindow.className = 'msgGameOver';
				}
			}


			function gameloop(){
				// HORIZONTAL MOVEMENT
				var hero_src = hero.src.split('/').pop();
				var ogre_src = ogre.src.split('/').pop();
				
				var punk_src = punk.src.split('/').pop();	
				

				console.log(hero_src);
	

				
				
							//ogre seeking hero code
				var ogre2move = false;
				var ogreMove = false;
				var sideHit = false;
				
				

				
				
					//moving ogre right
				if( parseInt(hero.style.left) - parseInt(ogre.style.left) < 250 && parseInt(hero.style.left) > parseInt(ogre.style.left) && ogreDead == false && (level == 1 || level == 2) ){
					ogreMove = true;
					if(ogre_src != 'ogreWalk.gif') ogre.src = 'images/ogreWalk.gif';
					
					ogre.style.left = parseInt(ogre.style.left) + 3 + 'px';
					ogre.className = '';
					 for(var i=0; i<platforms.length; i++){
					   	if( hittest(ogre, platforms[i]) ){
					   		ogre.style.left = parseInt(ogre.style.left) - 3 + 'px';
					   	}
					   }
				}

				if( parseInt(hero.style.left) - parseInt(ogre.style.left) < 250 && parseInt(hero.style.left) > parseInt(ogre.style.left) && ogreDead == false && level == 3){
					ogreMove = true;
					if(ogre_src != 'stoneManWalk.gif') ogre.src = 'images/stoneManWalk.gif';
					ogre.style.left = parseInt(ogre.style.left) + 3 + 'px';
					ogre.className = '';
					 for(var i=0; i<platforms.length; i++){
					   	if( hittest(ogre, platforms[i]) ){
					   		ogre.style.left = parseInt(ogre.style.left) - 3 + 'px';
					   	}
					   }
				}

				// ogre left movement
				if( parseInt(ogre.style.left) - parseInt(hero.style.left) < 250 && parseInt(hero.style.left) < parseInt(ogre.style.left) && ogreDead == false && (level == 1 || level == 2) ){
					ogreMove = true;
				if(ogre_src != 'ogreWalk.gif') ogre.src = 'images/ogreWalk.gif';
					ogre.style.left = parseInt(ogre.style.left) - 3 + 'px';
					ogre.className = 'flip-H';
					 for(var i=0; i<platforms.length; i++){
					   	if( hittest(ogre, platforms[i]) ){
					   		ogre.style.left = parseInt(ogre.style.left) + 3 + 'px';
					   	}
					   }
					
					
					
				}

				if( parseInt(ogre.style.left) - parseInt(hero.style.left) < 250 && parseInt(hero.style.left) < parseInt(ogre.style.left) && ogreDead == false && level == 3){
					ogreMove = true;
				if(ogre_src != 'stoneManWalk.gif') ogre.src = 'images/stoneManWalk.gif';
					ogre.style.left = parseInt(ogre.style.left) - 3 + 'px';
					ogre.className = 'flip-H';
					 for(var i=0; i<platforms.length; i++){
					   	if( hittest(ogre, platforms[i]) ){
					   		ogre.style.left = parseInt(ogre.style.left) + 3 + 'px';
					   	}
					   }
					
					
					
				}

				//ogre stationary
				if( parseInt(hero.style.left) - parseInt(ogre.style.left) > 250 && ogreDead == false || parseInt(ogre.style.left) - parseInt(hero.style.left) > 250 && ogreDead == false ){
					ogreMove = false;
					ogre.src = 'images/ogreStand.gif';
					if(level == 3){
						ogre.src = 'images/stoneManStand.gif';
					}
				}

				

			

				


				var punkMove = false;

				
				


				//moving punk right		
				if( parseInt(hero.style.left) - parseInt(punk.style.left) < 250 && parseInt(hero.style.left) > parseInt(punk.style.left) && punkDead == false){
					punkMove = true;
					if(punk_src != 'punkWalk.gif') punk.src = 'images/punkWalk.gif';
					punk.style.left = parseInt(punk.style.left) + 3 + 'px';
					punk.className = '';

					 for(var i=0; i<platforms.length; i++){
					   	if( hittest(punk, platforms[i]) ){
					   		punk.style.left = parseInt(punk.style.left) - 3 + 'px';
					   	}
					   }
					
					
					}
				

				
				// punk left movement
				if( parseInt(punk.style.left) - parseInt(hero.style.left) < 250 && parseInt(hero.style.left) < parseInt(punk.style.left) && punkDead == false ){
					punkMove = true;
					if(punk_src != 'punkWalk.gif') punk.src = 'images/punkWalk.gif';
					
					punk.style.left = parseInt(punk.style.left) - 3 + 'px';
					punk.className = 'flip-H';	
					 for(var i=0; i<platforms.length; i++){
					   	if( hittest(punk, platforms[i]) ){
					   		punk.style.left = parseInt(punk.style.left) + 3 + 'px';
					   	}
					   }
				}
			
				
				//punk stationary
				if( parseInt(hero.style.left) - parseInt(punk.style.left) > 250 && punkDead == false || parseInt(punk.style.left) - parseInt(hero.style.left) > 250 && punkDead == false){
					punkMove = false;
					punk.src = 'images/punkStand.gif';
					
				}
			
				
				


				
			
					
				
				



					



				
				
				
				//code for when not walking
				if(leftArrowDown || rightArrowDown){
				if(hero_src != 'walk.gif') hero.src = 'images/walk.gif';
				}

				else hero.src = 'images/stand.gif';

				if(spaceArrowDown){
					hero.src = 'images/attack.gif';
					sword();

				}
				function sword (){
					document.getElementById('sndSword').play();
					sndSword.volume = 0.1;
				}

				if(upArrowDown){
					hero.src = 'images/jump.gif';
					jump();
										
				}

				function jump (){
					document.getElementById('sndJump').play();
					sndJump.volume = 0.1;
				}
				if(leftArrowDown){

					
					hero.className = 'flip-H';
					

					hero.style.left = parseInt(hero.style.left) - 5 + 'px';

					var sideHit = false;
					for(var i=0; i<platforms.length; i++){
						if( hittest(hero, platforms[i]) ) sideHit = true;
					}
					hero.style.left = parseInt(hero.style.left) + 5 + 'px';

					


					if( ! sideHit ) {
					   for(var i=0; i<platforms.length; i++){
					   	platforms[i].style.left = parseInt(platforms[i].style.left) + 7 + 'px';
					   }
					  	
						ogre.style.left = parseInt(ogre.style.left) + 7 + 'px';
						
						punk.style.left = parseInt(punk.style.left) + 7 + 'px';
						bg2.style.left = parseInt(bg2.style.left) + 7 + 'px';
						ladder.style.left = parseInt(ladder.style.left) + 7 + 'px';
						apple.style.left = parseInt(apple.style.left) + 7 + 'px';
						door.style.left = parseInt(door.style.left) + 7 + 'px';
						
						
						
					   }
					   
						


					   
				}
				



				if(rightArrowDown){

					hero.className = '';
					

					hero.style.left = parseInt(hero.style.left) + 7 + 'px';	

					var sideHit = false;
					for(var i=0; i<platforms.length; i++){
						if( hittest(hero, platforms[i]) ) sideHit = true;
					}
					hero.style.left = parseInt(hero.style.left) - 7 + 'px';
					
					

					if( ! sideHit ) {
					   for(var i=0; i<platforms.length; i++){
					   	platforms[i].style.left = parseInt(platforms[i].style.left) - 7 + 'px';
					   }
					  
						ogre.style.left = parseInt(ogre.style.left) - 7 + 'px';
						
						punk.style.left = parseInt(punk.style.left) - 7 + 'px';
						bg2.style.left = parseInt(bg2.style.left) - 7 + 'px';
						ladder.style.left = parseInt(ladder.style.left) - 7 + 'px';
						apple.style.left = parseInt(apple.style.left) - 7 + 'px';
						door.style.left = parseInt(door.style.left) - 7 + 'px';
						
						
						
					   }

					   
				}
				

				//vertical movement
				fallSpeed += GRAVITY;	
				ogreFall += GRAVITY;
				stoneFall += GRAVITY;
				punkFall += GRAVITY;
				hero.style.top = parseInt(hero.style.top) + fallSpeed + 'px';
				ogre.style.top = parseInt(ogre.style.top) + ogreFall + 'px';
				punk.style.top = parseInt(punk.style.top) + punkFall + 'px';
				
						
				


			

				
				
				
				//hit detection for hero and platforms
				for(var i=0; i<platforms.length; i++){
					
	
					if( hittest(hero, platforms[i]) ){
						

					

						if(fallSpeed<0){
							//hit bottom of platform
							hero.style.top = parseInt(platforms[i].style.top) + parseInt(platforms[i].style.height) + 'px';
							fallSpeed *= -1;
							
							
						}


						else{
							//hit top of platform
							hero.style.top = parseInt(platforms[i].style.top) - parseInt(hero.style.height) + 'px';

							if(upArrowDown) fallSpeed = -16; //upward force
							else{
								fallSpeed = 0;
								
							}
						}

						


				}

				
				//hit detection for ogre and platforms
				if( hittest(ogre, platforms[i]) ){
					
					//ogre falling
						if(ogreFall<0){
							//hit bottom of platform
							ogre.style.top = parseInt(platforms[i].style.top) + parseInt(platforms[i].style.height) + 'px';
							fallSpeed *= -1;
						}
						else{
							//hit top of platform
							ogre.style.top = parseInt(platforms[i].style.top) - parseInt(ogre.style.height) + 'px';
							ogreFall = 0;
						}

						}




					

				//hit detection for punks and platforms
				


						
					
				

					if( hittest(punk, platforms[i]) ){
					
					//ogre falling
						if(punkFall<0){
							//hit bottom of platform
							punk.style.top = parseInt(platforms[i].style.top) + parseInt(platforms[i].style.height) + 'px';
							fallSpeed *= -1;
						}
						else{
							//hit top of platform
							punk.style.top = parseInt(platforms[i].style.top) - parseInt(punk.style.height) + 'px';
							punkFall = 0;
						}

						}



					
						
				//end of loop
			}
				//hit detection for next level
				
				//falling off map
				if( parseInt(hero.style.top) > 1000){
					clearInterval(gameTimer);
					gameWindow.innerHTML = '<br><br>Loser';
						gameWindow.className = 'msgGameOver';

					removeLife();
					level--;
					nextLevel();
				}
				
				//hit detection between warrior and ogre
				if( hittest(hero, ogre) && spaceArrowDown ){
					ogreLife = ogreLife - 25 ;

				//ogre Dead Function
				if(ogreDead == true && (level == 1 || level == 2) ){
					ogre.src = 'images/ogreDying.gif';
					ogre.style.left = parseInt(ogre.style.left) + 0 + 'px';

				}

				if(ogreDead == true && (level == 3) ){
					ogre.src = 'images/stoneManDead.gif';
					ogre.style.left = parseInt(ogre.style.left) + 0 + 'px';

				}
	
				}

				


				if( hittest(ogre, hero) && ogreDead == false && (level == 1 || level == 2) ){
					ogre.src = 'images/ogreAttack.gif';
					pink.style.width = parseInt(pink.style.width) - 1 + 'px';
					heroLife = heroLife - 1 ;
						

				}

				if( hittest(ogre, hero) && ogreDead == false && level == 3 ){
					ogre.src = 'images/stoneManAttack.gif';
					pink.style.width = parseInt(pink.style.width) - 1 + 'px';
					heroLife = heroLife - 1 ;
						

				}

				if( ogreLife == 0 ){
					ogreDead = true;
					}

					//warrior and ladder
					if( hittest(hero, ladder) && upArrowDown ){
						fallSpeed = 0;
						hero.style.top = parseInt(hero.style.top) - 10 + 'px';
					}



					//gain HP
					var appleDead = false;
					if( hittest(hero, apple) ){
						heroLife = 190;
						pink.style.width = 194 + 'px';
						apple.style.top = 600 + 'px';
					}
					
					
					//warrior and punk stuff

				
				if( hittest(hero, punk) && spaceArrowDown ){
					punkLife = punkLife - 25 ;

				//punk Dead Function
				if(punkDead == true){
					punk.src = 'images/punkDead.gif';
					punk.style.left = parseInt(punk.style.left) + 0 + 'px';

				}
				}




				if( hittest(punk, hero) && punkDead == false ){
					punk.src = 'images/punkAttack.gif';
					pink.style.width = parseInt(pink.style.width) - 1 + 'px';
					heroLife = heroLife - 1 ;
						

				}




				if( punkLife == 0){
					punkDead = true;
				}

				


				if( hittest(ogre, punk) ){
					punk.style.left = parseInt(punk.style.left) + 2 + 'px';
				}

				


				if( hittest(ogre, punk) ){
					punk.style.left = parseInt(punk.style.left) + 2 + 'px';
				}



				if( heroLife == 0 || heroLife < 0){
					hero.src = 'images/heroDead.gif';
					heroDead = true;
					gameWindow.innerHTML = '<br><br> LOSER!!';
					gameWindow.className = 'msgGameOver';
					clearInterval(gameTimer);
				}


				if( hittest(hero, door) && spaceArrowDown ){
				
				if(level==1){
					door.src = 'images/doorOpen.gif';
					clearInterval(gameTimer);
			}
					if(level==2){
					clearInterval(gameTimer);
					door.src = 'images/dungeonOpen.gif';
					}

					if(level==3){
						gameWindow.innerHTML = '<br><br>You Win!';
						gameWindow.className = 'msgGameOver';
					}
					//moving to next level
					else{
					document.getElementById('btnContinue').style.display = 'block';
					}

			}

	

			}



			document.addEventListener('keydown', function(event){
				if(event.keyCode==37) leftArrowDown = true;
				if(event.keyCode==39) rightArrowDown = true;
				if(event.keyCode==38) upArrowDown = true;
				if(event.keyCode==32) spaceArrowDown = true;
			
			});

			document.addEventListener('keyup', function(event){
				if(event.keyCode==37) leftArrowDown = false;
				if(event.keyCode==39) rightArrowDown = false;
				if(event.keyCode==38) upArrowDown = false;
				if(event.keyCode==32) spaceArrowDown = false;
			});

			
			