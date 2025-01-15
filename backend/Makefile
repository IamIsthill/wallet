.PHONY: run
run:
	poetry run python -m project.manage runserver

.PHONY: migration
migration:
	poetry run python -m project.manage makemigrations
	make migrate

.PHONY: migrate
migrate:
	poetry run python -m project.manage migrate

.PHONY: app
app:
	poetry run python -m project.manage startapp ${a}
	mv ${a} project/${a}

.PHONY: user
user:
	python -m project.manage loaddata user.json

.PHONY: dump
dump:
	python -m project.manage dumpdata > db.json
