export default `[
    {
        "key": "common",
        "children": [
            {
                "key": "follow",
                "value2": false,
                "type": "added"
            },
            {
                "key": "setting1",
                "value1": "Value 1",
                "type": "unchanged"
            },
            {
                "key": "setting2",
                "value1": 200,
                "type": "removed"
            },
            {
                "key": "setting3",
                "value1": true,
                "value2": null,
                "type": "changed"
            },
            {
                "key": "setting4",
                "value2": "blah blah",
                "type": "added"
            },
            {
                "key": "setting5",
                "value2": {
                    "key5": "value5"
                },
                "type": "added"
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
                                "type": "changed"
                            }
                        ]
                    },
                    {
                        "key": "key",
                        "value1": "value",
                        "type": "unchanged"
                    },
                    {
                        "key": "ops",
                        "value2": "vops",
                        "type": "added"
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
                "type": "changed"
            },
            {
                "key": "foo",
                "value1": "bar",
                "type": "unchanged"
            },
            {
                "key": "nest",
                "value1": {
                    "key": "value"
                },
                "value2": "str",
                "type": "changed"
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
        "type": "removed"
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
        "type": "added"
    }
]`;
