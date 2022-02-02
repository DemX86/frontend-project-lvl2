export default `[
    {
        "key": "common",
        "children": [
            {
                "key": "follow",
                "value2": false,
                "status": "added"
            },
            {
                "key": "setting1",
                "value1": "Value 1",
                "status": "unchanged"
            },
            {
                "key": "setting2",
                "value1": 200,
                "status": "removed"
            },
            {
                "key": "setting3",
                "value1": true,
                "value2": null,
                "status": "changed"
            },
            {
                "key": "setting4",
                "value2": "blah blah",
                "status": "added"
            },
            {
                "key": "setting5",
                "value2": {
                    "key5": "value5"
                },
                "status": "added"
            },
            {
                "key": "setting6",
                "children": [
                    {
                        "key": "doge",
                        "children": [
                            {
                                "key": "wow",
                                "value1": "",
                                "value2": "so much",
                                "status": "changed"
                            }
                        ]
                    },
                    {
                        "key": "key",
                        "value1": "value",
                        "status": "unchanged"
                    },
                    {
                        "key": "ops",
                        "value2": "vops",
                        "status": "added"
                    }
                ]
            }
        ]
    },
    {
        "key": "group1",
        "children": [
            {
                "key": "baz",
                "value1": "bas",
                "value2": "bars",
                "status": "changed"
            },
            {
                "key": "foo",
                "value1": "bar",
                "status": "unchanged"
            },
            {
                "key": "nest",
                "value1": {
                    "key": "value"
                },
                "value2": "str",
                "status": "changed"
            }
        ]
    },
    {
        "key": "group2",
        "value1": {
            "abc": 12345,
            "deep": {
                "id": 45
            }
        },
        "status": "removed"
    },
    {
        "key": "group3",
        "value2": {
            "deep": {
                "id": {
                    "number": 45
                }
            },
            "fee": 100500
        },
        "status": "added"
    }
]`;
