import multiprocessing

def start_session_and_run(*target_args):
    from mage_ai.orchestration.db import db_connection

    if len(target_args) == 0:
        return None
    target = target_args[0]
    args = target_args[1:]

    db_connection.start_session()

    results = target(*args)

    db_connection.close_session()
    return results

def create_process(target, args=()):
    new_args = [target, *args]
    return multiprocessing.Process(target=start_session_and_run, args=new_args)