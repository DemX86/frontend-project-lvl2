export default `[
    {
        "key": "common",
        "value1": {
            "setting1": "Value 1",
            "setting2": 200,
            "setting3": true,
            "setting6": {
                "key": "value",
                "doge": {
                    "wow": ""
                }
            }
        },
        "value2": {
            "follow": false,
            "setting1": "Value 1",
            "setting3": null,
            "setting4": "blah blah",
            "setting5": {
                "key5": "value5"
            },
            "setting6": {
                "key": "value",
                "ops": "vops",
                "doge": {
                    "wow": "so much"
                }
            }
        },
        "status": null,
        "children": [
            {
                "key": "follow",
                "value2": false,
                "status": "added",
                "children": null
            },
            {
                "key": "setting1",
                "value1": "Value 1",
                "value2": "Value 1",
                "status": "unchanged",
                "children": null
            },
            {
                "key": "setting2",
                "value1": 200,
                "status": "removed",
                "children": null
            },
            {
                "key": "setting3",
                "value1": true,
                "value2": null,
                "status": "changed",
                "children": null
            },
            {
                "key": "setting4",
                "value2": "blah blah",
                "status": "added",
                "children": null
            },
            {
                "key": "setting5",
                "value2": {
                    "key5": "value5"
                },
                "status": "added",
                "children": null
            },
            {
                "key": "setting6",
                "value1": {
                    "key": "value",
                    "doge": {
                        "wow": ""
                    }
                },
                "value2": {
                    "key": "value",
                    "ops": "vops",
                    "doge": {
                        "wow": "so much"
                    }
                },
                "status": null,
                "children": [
                    {
                        "key": "doge",
                        "value1": {
                            "wow": ""
                        },
                        "value2": {
                            "wow": "so much"
                        },
                        "status": null,
                        "children": [
                            {
                                "key": "wow",
                                "value1": "",
                                "value2": "so much",
                                "status": "changed",
                                "children": null
                            }
                        ]
                    },
                    {
                        "key": "key",
                        "value1": "value",
                        "value2": "value",
                        "status": "unchanged",
                        "children": null
                    },
                    {
                        "key": "ops",
                        "value2": "vops",
                        "status": "added",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "key": "group1",
        "value1": {
            "baz": "bas",
            "foo": "bar",
            "nest": {
                "key": "value"
            }
        },
        "value2": {
            "foo": "bar",
            "baz": "bars",
            "nest": "str"
        },
        "status": null,
        "children": [
            {
                "key": "baz",
                "value1": "bas",
                "value2": "bars",
                "status": "changed",
                "children": null
            },
            {
                "key": "foo",
                "value1": "bar",
                "value2": "bar",
                "status": "unchanged",
                "children": null
            },
            {
                "key": "nest",
                "value1": {
                    "key": "value"
                },
                "value2": "str",
                "status": "changed",
                "children": null
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
        "status": "removed",
        "children": null
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
        "status": "added",
        "children": null
    }
]`;
