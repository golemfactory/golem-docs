# How to import from other files

If you wish to import content from another file, these files has to go
into the `src/markdoc/partials` directory. You can then import the content using the following
syntax.

```markdown {% process=false %}
{% partial file="demo.md" /%}
```

Keep in mind that this partial syntax root is in the directory specified above.
