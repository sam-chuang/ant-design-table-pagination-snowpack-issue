# ant-design-table-pagination-snowpack-issue

The following will fail, URL: https://sam-chuang.github.io/ant-design-table-pagination-snowpack-issue/build/index.html

```
    <Table columns={columns} dataSource={data} />
```

The following will work

```
    <Table columns={columns} pagination={false} dataSource={data} />
```

Steps:

1. npm install
2. npm start
3. open browser
4.
