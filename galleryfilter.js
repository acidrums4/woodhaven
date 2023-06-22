document.addEventListener('DOMContentLoaded', function()
{
	const items = document.querySelectorAll('.card_mini')
	const filters = document.querySelectorAll('[data-filter]')

	function filterGallery(filter)
	{
		items.forEach(function(item)
		{
			if (filter === 'all')
			{
				item.removeAttribute('hidden')
			}

			else
			{
				let tags = item.dataset.tags

				if (tags && tags.includes(filter))
				{
					item.removeAttribute('hidden')
				}

				else if (tags)
				{
					item.setAttribute('hidden', '')
				}
			}
		})
	}

	filters.forEach(function(element)
	{
		element.addEventListener('click', function(e)
		{
			e.stopPropagation()
			e.preventDefault()
			filterGallery(e.target.dataset.filter)

			filters.forEach(filter=>filter.classList.remove('active'))
			e.target.classList.add('active')
		})
	})
})
