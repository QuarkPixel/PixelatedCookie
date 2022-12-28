Game.registerMod('pixelatedCookie', {
	init: function () {
		//Change Resource
		let beChangedFileName = [
			'perfectCookie.png',
			'goldCookie.png',
			'wrathCookie.png',
			'imperfectCookie.png',
			'frostedReindeer.png',
			'buildings.png',
			'cursor.png',
			//background
			'bgBlue.jpg',
			'bgBlack.jpg',
			'bgChoco.jpg',
			'bgChocoDark.jpg',
			'bgCoarse.jpg',
			'bgFoil.jpg',
			'bgBW.jpg',
			'bgCandy.jpg',
			//milk
			'milkRaspberry.png',
			// 'zpix.ttf',
		]
		for (let i = 0; i < beChangedFileName.length; i++) {
			Game.Loader.Replace(
				beChangedFileName[i],
				// this.dir + '/res/bgBlue.jpg',
				this.dir + '/res/' + beChangedFileName[i],
			)
		}

		// Game.Load([this.dir + '/res/zpix.ttf'])
		// console.log(Game)

		//Style Sheet
		{
			let style = document.createElement('style')
			style.rel = 'stylesheet'
			style.appendChild(
				document.createTextNode(`
				.shimmer[alt='${loc('Golden cookie')}'] {
					background-image: url('${this.dir}/res/goldCookie.png') !important;
				}
				.shimmer[alt='${loc('Wrath cookie')}'] {
					background-image: url('${this.dir}/res/wrathCookie.png') !important;
				}
				.shimmer[alt='${loc('Reindeer')}'] {
					background-image: url('${this.dir}/res/frostedReindeer.png') !important;
				}
				`),
			)
			var head = document.getElementsByTagName('head')[0]
			head.appendChild(style)

			let link = document.createElement('link')
			link.type = 'text/css'
			link.rel = 'stylesheet'
			link.href = this.dir + '/style.css'
			var head = document.getElementsByTagName('head')[0]
			head.appendChild(link)
		}
		console.log(this)
		// Game.Loader.Replace('bgBlue.jpg', this.dir + '/res/bgBlue.jpg')
	},
	// init: function () {
	// Game.Loader.Replace('perfectCookie.png', this.dir + '/cookie.png')
	// },
})
