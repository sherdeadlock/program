#!/usr/bin/env python3

import random
import string
import json
import time


def random_date(start, end):
    nstart = time.mktime(time.strptime(start, '%Y/%m/%d'))
    nend = time.mktime(time.strptime(end, '%Y/%m/%d'))
    rtime = nstart + (nend - nstart) * random.random()
    return time.strftime('%Y/%m/%d', time.localtime(rtime))


def gen_users():
    users = []
    for i in range(50):
        print(i)
        user = {}
        user['id'] = i + 1
        name_len = int(4 + random.random() * 5)
        user['name'] = ''.join( random.choice(string.ascii_letters) for i in range(name_len) )
        user['money'] = random.random() * 10000000
        user['active'] = random.random() * 2 > 1
        user['birthday'] = random_date('2000/01/01', '2020/01/01')
        users.append(user)

    str_json = json.dumps(users)
    with open('/tmp/users.json', 'w', encoding='utf-8') as f:
        f.write(str_json)


def main():
    gen_users()


if __name__ == '__main__':
    main()
