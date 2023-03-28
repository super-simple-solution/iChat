// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn command_stt() -> String {
  "Hello from Rust!".into()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![command_stt])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
