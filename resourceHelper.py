with open('output.txt', 'a') as f:

    name = input('Enter Name: ')
    desc = input('Enter Description: ')
    path = input('Enter Path Shorthand: ')
    url = input('Enter Website URL: ')
    tags = input('Enter Tags (tag1, tag2, tag3): ')

    path = path.lower()

    # TAGS: paid, free, mix, yt (youtube), ig (instagram), tw (twitter), vp (videoprocess), tutorial
    tagsArr = tags.split(",")
    tagsArr = ['"' + tag.strip() + '"' for tag in tagsArr]

    print("{", file=f)
    print(f'"name": "{name}",', file=f)
    print(f'"description": "{desc}",', file=f)
    print(f'"avatar": "images/resources/{path}.png",', file=f)
    print(f'"image": "images/resources/backgrounds/{path}.png",', file=f)
    print(f'"url": "{url}",', file=f)
    print(f'"tags": [{",".join(tagsArr)}]', file=f)
    print("},", file=f)

