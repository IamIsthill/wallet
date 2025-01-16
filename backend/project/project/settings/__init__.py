import os
from pathlib import Path

import environ
from split_settings.tools import include

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent.parent.parent

env = environ.Env()
env.read_env(os.path.join(BASE_DIR, ".env"))

try:
    PROD = env.bool("PROD", default=True)

    SETTINGS_PATH = (
        BASE_DIR / "local/settings.prod.py"
        if PROD
        else BASE_DIR / "local/settings.local.py"
    )

    print(f"Local PROD settings: {PROD}")
    print(f"Settings path used: {SETTINGS_PATH}")

    include(
        "settings.py",
        SETTINGS_PATH,
        "database.py",
        "static.py",
        "rest.py",
    )
except Exception as e:
    print(f"Error in loading settings configuration files: {e}")
