from random import random
def makeRoute(pxls):
    l = pxls * 6,5 / 180
    h = l * 0.3 * random()
    t = l / 5 + h//0.6
    return "{0:.2f}".format(t)

routes = [ 203, 185, 280, 237, 234, 276, 197, 272, 219, 229, 240, 240, 262, 339, 257, 258]

for i in range(len(routes)):
    r = makeRoute(routes[i])
    routes[i] = r

for i in range(len(routes)):
    print(f'{i+1}: {routes[i]}')