import asyncio
from pathlib import Path

BASE = Path("storage/users")

def get_paths(user_id):
    user_dir = BASE / str(user_id)
    user_dir.mkdir(parents=True, exist_ok=True)

    return {
        "config": str(user_dir / ".alexa.config"),
        "cookie": str(user_dir / ".alexa.cookie")
    }

def sanitize(text):
    for c in [";", "&", "|", "`"]:
        text = text.replace(c, "")
    return text
def create_user_config(user_id):
    paths = get_paths(user_id)

    # crear archivo config vacío
    open(paths["config"], "w").close()
    open(paths["cookie"], "w").close()

    return paths

async def run_command(config, instruction):
    instruction = sanitize(instruction)

    cmd = [
        "bash",
        "scripts/alexa_remote_control.sh",
        "-c", config,
        "-e", f"speak:{instruction}"
    ]

    proc = await asyncio.create_subprocess_exec(
        *cmd,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE
    )

    out, err = await proc.communicate()

    return proc.returncode, out.decode(), err.decode()